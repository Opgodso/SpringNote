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

    const stripHtmlTags = (html: string): string => {
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };

    return (
        <div className="container">
            {/* 编辑器 */}
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
                        p: ({ children }) => <>{children}</>, // 移除 <p> 标签
                    }}
                    skipHtml
                >
                    {stripHtmlTags(markdown)}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Page;
