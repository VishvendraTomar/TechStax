import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  const handleFileUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv'; // Set accepted file type
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      // Handle file upload logic here (e.g., send file to backend)
      console.log('Uploaded file:', file);
    };
    fileInput.click();
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
      <button onClick={handleFileUpload}>Upload CSV</button> {/* Add button for file upload */}
        Custom Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Delay Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Convert Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'redirect')} draggable>
       Redirect 
      </div>
    </aside>
  );
};
