import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

const App = () => {
  const placeholder = `
# H1 sarlavha
## H2 sarlavha
[Havola](https://www.example.com)
\`Inline kod\`
\`\`\`
Katta kod blogi
function example() {
  return "Hello, world!";
}
\`\`\`
- Ro'yxat elementi
> Blockquote (sitata)

**Qalin matn**
![Rasm](https://via.placeholder.com/150)
`;

  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        ></div>
      </div>
    </div>
  );
};

export default App;
