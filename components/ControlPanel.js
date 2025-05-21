export default function ControlPanel({ scale, setScale, selectedFile, setSelectedFile, speed, setSpeed, maxPoints, setMaxPoints }) {
    const handleScaleChange = (event) => {
      setScale(parseFloat(event.target.value));
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.value);
    };
  
    const handleSpeedChange = (event) => {
      setSpeed(parseFloat(event.target.value));
    };
  
    const handleMaxPointsChange = (event) => {
      setMaxPoints(parseInt(event.target.value, 10));
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
  
        {/* Speed Slider */}
        <div style={{ marginTop: '10px' }}>
          <label>
            Speed: {speed.toFixed(3)}
            <input
              type="range"
              min="0.001"
              max="1"
              step="0.001"
              value={speed}
              onChange={handleSpeedChange}
            />
          </label>
        </div>
  
        {/* Max Points Slider */}
        <div style={{ marginTop: '10px' }}>
          <label>
            Max Points: {maxPoints}
            <input
              type="range"
              min="0"
              max="1000"
              step="1"
              value={maxPoints}
              onChange={handleMaxPointsChange}
            />
          </label>
        </div>
  
        {/* Dataset Dropdown */}
        <div style={{ marginTop: '10px' }}>
          <label>
            Dataset:
            <select value={selectedFile} onChange={handleFileChange}>
              <option value="pca_output_small.json">pca_output_small test3</option>
              <option value="tsne_output.json">t-SNE Output</option>
              <option value="pca_output.json">PCA Output</option>
            </select>
          </label>
        </div>
      </div>
    );
  }