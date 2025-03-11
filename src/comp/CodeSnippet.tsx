interface CodeSnippetProps {
  title?: string;
  noTitleIfNoCode?: boolean;
  code?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  title,
  noTitleIfNoCode = false,
  code = "",
}) => {
  if (noTitleIfNoCode && code.length === 0) {
    return null;
  }
  return (
    <div className="code-snippet">
      <span className="code-snippet__title">{title}</span>
      <div className="code-snippet__container">
        <div className="code-snippet__wrapper">
          <pre className="code-snippet__body">{code}</pre>
        </div>
      </div>
    </div>
  )
};

export const PageLoader: React.FC = () => {
  return (
    <div>
      Page Loader...
    </div>
  );
};
