import React, { FunctionComponent, useState, MutableRefObject } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/japanese';

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
  language: string;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  language,
}) => {
  const { layout: japaneseLayout } = layout;
  const [layoutName, setLayoutName] = useState('default');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }
  };

  return (
    <>
      {language === 'Japanese' && (
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          layout={japaneseLayout}
          layoutName={layoutName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onRender={() => console.log('Rendered')}
        />
      )}
      {language === 'English' && (
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          layoutName={layoutName}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onRender={() => console.log('Rendered')}
        />
      )}
    </>
  );
};

export default KeyboardWrapper;
