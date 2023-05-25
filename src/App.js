import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const App = () => {
  const editor = useBlockNote({})
  return <BlockNoteView editor={editor} />;
}
export default App;