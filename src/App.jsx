import Navbar from './components/Navbar'
import Result from './components/Result'
import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from '@codemirror/lang-javascript';
import { useCallback,useState } from 'react';

function App() {

  const [htmlEdit, setHtmlEdit] = useState('');
  const [cssEdit, setCssEdit] = useState('');
  const [jsEdit, setJsEdit] = useState('');

  const onChangeHtml = useCallback((value)=>{
    setHtmlEdit(value);
  }, []);

  const onChangeCss = useCallback((value)=>{
    setCssEdit(value)
  }, []);

  const onChangeJs = useCallback((value)=>{
    setJsEdit(value)
  }, []);

  const srcCode = `
    <html>
      <body>${htmlEdit}</body>
      <style>${cssEdit}</style>
      <script>${jsEdit}</script>
    </html>
  `

  return (
    <>
      <Navbar />
      <div className='p-2'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h1 className='text-lg font-semibold mb-2 text-white'>HTML</h1>
            <CodeMirror 
              className='text-xl border border-gray-700'
              value={htmlEdit}
              height='342px'
              theme={'dark'}
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h1 className='text-lg font-semibold mb-2 text-white'>CSS</h1>
            <CodeMirror 
              className='text-xl border border-gray-700'
              value={cssEdit}
              height='342px'
              theme={'dark'}
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h1 className='text-lg font-semibold mb-2 text-white'>JAVASCRPIT</h1>
            <CodeMirror 
              className='text-xl border border-gray-700'
              value={jsEdit}
              height='342px'
              theme={'dark'}
              extensions={[javascript(true)]}
              onChange={onChangeJs}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </>
  )
}

export default App
