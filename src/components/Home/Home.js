import React from 'react';

import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('');

  return (
    <main>
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text} />
      <Editor title={title} setTitle={setTitle} subtitle={subtitle} setSubtitle={setSubtitle} font={font} setFont={setFont} setAlign={setAlign} text={text} setText={setText} />
    </main>
  );
}
