import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactMarkdown from 'react-markdown';
import './Page.css';

const Page: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');

    const handleQuillChange = (content: string) => {
        setMarkdown(content);
    };

    const saveMarkdownContent2Backend = async () => {
        try {
            const response = await fetch('http://localhost:5001/notes/api/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userid: 1,
                    user_name: 'test',
                    title: 'test notebook',
                    content: markdown,
                }),
            });

            if (response.ok) {
                console.log('Success save');
            } else {
                console.log('Error save');
            }
        } catch (error) {
            console.log('Error save markdown', error);
        }
    };

    const stripHtmlTags = (html: string): string => {
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };

    return (
        <div className="container">
            <div className="editor">
                <ReactQuill
                    value={markdown}
                    onChange={handleQuillChange}
                    placeholder="輸入你的 Markdown"
                />
            </div>

            <div className="preview">
                <ReactMarkdown
                    components={{
                        p: ({ children }) => <>{children}</>, // 移除 <p> 標籤
                    }}
                    skipHtml
                >
                    {stripHtmlTags(markdown)}
                </ReactMarkdown>
            </div>
            <button onClick={saveMarkdownContent2Backend}>Save</button>
        </div>
    );
};

export default Page;
