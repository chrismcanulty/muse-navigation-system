import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export type Languages = 'EN' | 'JA';

export default function LanguageDropdown({
  languageAbb,
  setLanguageAbb,
}: // setClickSearch,
// setResults,
{
  languageAbb: string;
  setLanguageAbb: React.Dispatch<React.SetStateAction<string>>;
  // setClickSearch: React.Dispatch<React.SetStateAction<boolean>>;
  // setResults: React.Dispatch<
  //   React.SetStateAction<{ jicfsIdMiddle: number; jicfsNameMiddle: string }[]>
  //>;
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSelect = (language: Languages) => {
    setLanguageAbb(language);
    // setClickSearch(false);
    // setResults([]);
    handleClose();
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Typography>Language: {languageAbb}</Typography>
          <LanguageIcon sx={{ marginLeft: '5px' }} />
        </Button>
        {/* <Typography>{language}</Typography> */}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => handleOnSelect('JA')}>
                      {/* Put this into map const LANGUAGE = {'JP': ' 日本語', 'EN': 'English'} */}
                      日本語
                    </MenuItem>
                    <MenuItem onClick={() => handleOnSelect('EN')}>
                      English
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
