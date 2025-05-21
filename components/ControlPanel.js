// components/ControlPanel.js
'use client';

export default function ControlPanel({ scale, setScale, selectedFile, setSelectedFile }) {
  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100, background: 'white', padding: '10px', borderRadius: '5px' }}>
      {/* Scale Slider */}
      <div>
        <label>
          Scale: {scale.toFixed(1)}
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={scale}
            onChange={handleScaleChange}
          />
        </label>
      </div>

      {/* Dataset Dropdown */}
      <div style={{ marginTop: '10px' }}>
        <label>
          Dataset:
          <select value={selectedFile} onChange={handleFileChange}>
          <option value="pca_output_small.json">pca_output_small</option>
            <option value="tsne_output.json">t-SNE Output</option>
            <option value="pca_output.json">PCA Output</option>
            <option value="pca_output_MSE.json">PCA MSE Output</option>
            <option value="tsne_output_MSE.json">t-SNE MSE Output</option>
          </select>
        </label>
      </div>
    </div>
  );
}