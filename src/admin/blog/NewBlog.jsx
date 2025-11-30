import React, { useState, useRef } from 'react'; // --- Updated: Added useRef
import { Link } from 'react-router-dom';
import {
    FiArrowLeft, FiFilePlus, FiEye, FiSave, FiUploadCloud, FiEdit,
    FiBold, FiItalic, FiCode, FiLink, FiList, FiImage, FiX
} from 'react-icons/fi';
// --- New: Imports for Markdown Preview Modal ---
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// --- A simple reusable toggle switch component ---
// (This component remains unchanged)
const ToggleSwitch = ({ label, enabled, setEnabled }) => (
    <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <button
            type="button"
            className={`${enabled ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            onClick={() => setEnabled(!enabled)}
            aria-pressed={enabled}
        >
            <span className="sr-only">Toggle {label}</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
        </button>
    </div>
);

// --- A simple resuable input field ---
// (This component remains unchanged)
const InputField = ({ id, label, description, placeholder, type = 'text', value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <input
                type={type}
                name={id}
                id={id}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
        {description && (
            <p className="mt-2 text-xs text-gray-500">{description}</p>
        )}
    </div>
);

// --- New: Preview Modal Component ---
const PreviewModal = ({ content, title, authorName, date, onClose }) => ( // <-- Added props
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4"
        onClick={onClose}
    >
        <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Post Preview</h3>
                <button
                    type="button"
                    onClick={onClose}
                    className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                    <FiX className="h-5 w-5" />
                </button>
            </div>
            {/* Scrollable content area with Tailwind 'prose' styles for typography */}
            <div className="p-6 sm:p-8 overflow-y-auto">
                {/* --- New: Added Title, Author, Date --- */}
                <div className="mb-8 border-b pb-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{title || "Untitled Post"}</h1>
                    <div className="flex items-center text-sm text-gray-500">
                        <span>By {authorName || "Unknown Author"}</span>
                        <span className="mx-2">|</span>
                        <span>{date || new Date().toLocaleDateString()}</span>
                    </div>
                </div>
                {/* --- End of new section --- */}
                <article className="prose prose-indigo lg:prose-lg max-w-none">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {content || "*Write some content to see it previewed here.*"}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    </div>
);


// --- Main Blog Editor Page Component ---
const BlogEditorPage = () => {
    // --- State for all form fields ---
    const [postTitle, setPostTitle] = useState('');
    const [quickSummary, setQuickSummary] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [allowComments, setAllowComments] = useState(true);

    // --- New: State for Preview Modal ---
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    // --- New: Ref for the content textarea ---
    const contentRef = useRef(null);

    // --- Placeholder data ---
    const author = { initials: 'AU', name: 'Admin User', email: 'admin@shieldtalk.com' };
    const writingTips = [
        'Keep your title clear and engaging',
        'Add relevant tags to reach the right audience',
        'Use a featured image to make your post stand out',
        'Preview your post before publishing',
    ];

    // --- New: Handler for formatting buttons ---
    const handleFormatClick = (prefix, suffix, defaultText) => {
        const textarea = contentRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        const textToInsert = selectedText || defaultText;

        const newText = `${prefix}${textToInsert}${suffix}`;

        // Update the state
        setContent(
            textarea.value.substring(0, start) +
            newText +
            textarea.value.substring(end)
        );

        // Re-focus and select the inserted text after state update
        // We need to wait for the re-render
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(
                start + prefix.length,
                start + prefix.length + textToInsert.length
            );
        }, 0);
    };

    // --- New: Handlers for form submission ---
    const handlePublish = (e) => {
        e.preventDefault(); // Prevent default form submission
        const postData = {
            title: postTitle,
            summary: quickSummary,
            content,
            category,
            tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated string to array
            imageUrl,
            allowComments,
            status: 'published',
            author, // In a real app, this would be from auth context
        };
        console.log("Publishing Post:", postData);
        alert("Post Published! (Check console for data)");
    };

    const handleSaveDraft = () => {
        const postData = {
            title: postTitle,
            summary: quickSummary,
            content,
            category,
            tags: tags.split(',').map(tag => tag.trim()),
            imageUrl,
            allowComments,
            status: 'draft',
            author,
        };
        console.log("Saving Draft:", postData);
        alert("Draft Saved! (Check console for data)");
    };

    return (
        // Full page container with a light background
        <div className="min-h-screen bg-gray-100">

            {/* Top Header Bar */}
            <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Left Side: Back button and Title */}
                        {/* ... (unchanged) ... */}
                        <div className="flex items-center gap-4">
                            <Link
                                to="/admin/dashboard" // Or wherever "Back" should go
                                className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
                                aria-label="Go back"
                            >
                                <FiArrowLeft className="h-5 w-5" />
                            </Link>
                            <div className="flex items-center gap-2">
                                <span className="p-1.5 bg-indigo-100 rounded-lg text-indigo-600">
                                    <FiFilePlus className="h-5 w-5" />
                                </span>
                                <div>
                                    <h1 className="text-lg font-semibold text-gray-900">Quick Blog Post</h1>
                                    <p className="text-xs text-gray-500">Share your thoughts instantly</p>
                                </div>
                            </div>
                        </div>


                        {/* Right Side: Action Buttons - Updated onClicks */}
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsPreviewOpen(true)} // --- Updated ---
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <FiEye className="h-4 w-4" />
                                Preview
                            </button>
                            <button
                                type="button"
                                onClick={handleSaveDraft} // --- Updated ---
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <FiSave className="h-4 w-4" />
                                Save Draft
                            </button>
                            <button
                                type="submit"
                                form="blog-form" // Triggers the form's onSubmit
                                className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                <FiUploadCloud className="h-4 w-4" />
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area (Two-column layout) */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* We use a form tag here to wrap the inputs, linking it to the publish button */}
                <form id="blog-form" onSubmit={handlePublish} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Column 1: Editor (Main) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                            {/* ... (unchanged header) ... */}
                            <div className="flex items-center gap-3 mb-6">
                                <FiEdit className="h-5 w-5 text-gray-500" />
                                <h2 className="text-xl font-semibold text-gray-900">Write Your Post</h2>
                            </div>
                            <div className="space-y-6">
                                {/* ... (unchanged InputFields for Title and Summary) ... */}
                                <InputField
                                    id="postTitle"
                                    label="Post Title *"
                                    placeholder="What's on your mind?"
                                    value={postTitle}
                                    onChange={(e) => setPostTitle(e.target.value)}
                                />
                                <InputField
                                    id="quickSummary"
                                    label="Quick Summary"
                                    placeholder="A brief summary that will appear in the blog preview..."
                                    value={quickSummary}
                                    onChange={(e) => setQuickSummary(e.target.value)}
                                />

                                {/* Content / Text Editor */}
                                <div>
                                    {/* ... (unchanged labels) ... */}
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                        Content *
                                    </label>
                                    <p className="text-xs text-gray-500 mb-2">Share your thoughts, experiences, or insights with the community...</p>

                                    {/* Formatting Toolbar - Updated with onClicks */}
                                    <div className="flex items-center gap-1 border border-gray-300 rounded-t-lg px-3 py-2 bg-gray-50">
                                        <button type="button" onClick={() => handleFormatClick('**', '**', 'bold text')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiBold className="h-4 w-4" /></button>
                                        <button type="button" onClick={() => handleFormatClick('*', '*', 'italic text')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiItalic className="h-4 w-4" /></button>
                                        <button type="button" onClick={() => handleFormatClick('`', '`', 'code')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiCode className="h-4 w-4" /></button>
                                        <button type="button" onClick={() => handleFormatClick('[', '](https://)', 'link text')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiLink className="h-4 w-4" /></button>
                                        <button type="button" onClick={() => handleFormatClick('\n- ', '', 'list item')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiList className="h-4 w-4" /></button>
                                        <button type="button" onClick={() => handleFormatClick('![', '](https://)', 'alt text')} className="p-1 rounded text-gray-600 hover:bg-gray-200"><FiImage className="h-4 w-4" /></button>
                                    </div>

                                    <textarea
                                        ref={contentRef} // --- Updated: Added ref ---
                                        id="content"
                                        name="content"
                                        rows={12}
                                        className="block w-full rounded-b-md border border-t-0 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Start writing..."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                    <p className="mt-2 text-xs text-gray-500">Supports Markdown: **bold**, *italic*, `code`, quotes, - lists</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Sidebar (Settings) */}
                    {/* ... (This section remains unchanged) ... */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Post Settings Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Post Settings</h3>
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Choose category</option>
                                        <option value="tech">Tech</option>
                                        <option value="tips">Tips</option>
                                        <option value="community">Community</option>
                                        <option value="general">General</option>
                                    </select>
                                </div>
                                <InputField
                                    id="tags"
                                    label="Tags"
                                    placeholder="tech, tips, community"
                                    description="Separate with commas"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                />
                                <InputField
                                    id="imageUrl"
                                    label="Featured Image URL"
                                    placeholder="https://example.com/image.png"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                                <ToggleSwitch
                                    label="Allow Comments"
                                    enabled={allowComments}
                                    setEnabled={setAllowComments}
                                />
                            </div>
                        </div>

                        {/* Author Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Author</h3>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-sm font-semibold text-gray-600 border border-gray-200">
                                    {author.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{author.name}</p>
                                    <p className="text-xs text-gray-500">{author.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Writing Tips Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h3>
                            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                                {writingTips.map(tip => <li key={tip}>{tip}</li>)}
                            </ul>
                        </div>
                    </div>
                </form>
            </main>

            {/* --- New: Render the modal if isPreviewOpen is true --- */}
            {isPreviewOpen && (
                <PreviewModal
                    content={content}
                    onClose={() => setIsPreviewOpen(false)}
                    // --- New props passed ---
                    title={postTitle}
                    authorName={author.name}
                    date={new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
                />
            )}
        </div>
    );
};

export default BlogEditorPage;