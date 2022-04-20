import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeWindow.module.scss';

interface CodeWindow {
    code: string;
}

const CodeWindow: React.FC<CodeWindow> = ({ code }) => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.headerButtons}>
                <div className={styles.headerButton} />
                <div className={styles.headerButton} />
                <div className={styles.headerButton} />
            </div>
        </div>
        <div className={styles.codeHighlighter}>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} startingLineNumber={0} showLineNumbers wrapLines>
                {code}
            </SyntaxHighlighter>
        </div>
    </div>
);

export default CodeWindow;
