import React, { FunctionComponent, useState, MutableRefObject } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/japanese';

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
}) => {
  const { layout: japaneseLayout } = layout;
  const [layoutName, setLayoutName] = useState('default');

  const onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') {
      setLayoutName(layoutName === 'default' ? 'shift' : 'default');
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layout={japaneseLayout}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log('Rendered')}
    />
  );
};

export default KeyboardWrapper;
