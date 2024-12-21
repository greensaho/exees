function validateLayoutSize(layout) {
  const { sizeType, width, height } = layout;

  // Assume 'step' is a specific size type that requires width and height to be in steps.
  if (sizeType === 'step') {
    if (!isStepSize(width) || !isStepSize(height)) {
      throw new Error('layout size is step although width/height is not step.');
    }
  }

  // Additional validation logic...
}

function isStepSize(value) {
  // Example check: Ensure value is a multiple of some step size, e.g., 10.
  const stepSize = 10;
  return value % stepSize === 0;
}

// Example layout object
const layout = {
  sizeType: 'step',
  width: 25,  // Invalid width for 'step' size type
  height: 30  // Valid height for 'step' size type
};

try {
  validateLayoutSize(layout);
} catch (error) {
  console.error(error.message);  // Outputs: "layout size is step although width/height is not step."
}
