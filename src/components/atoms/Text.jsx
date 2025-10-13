import React from 'react';
import '../../styles/components/atoms/Text.css'

function Text({ children, variant = 'p', className }) {
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
}

export default Text;