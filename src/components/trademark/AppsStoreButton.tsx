import React from 'react';
import Image from 'next/image';

interface AppStoreBadgeProps {
  size?: 'small' | 'medium' | 'large' | 'footer';
}

const AppStoreBadge: React.FC<AppStoreBadgeProps> = ({ size = 'medium' }) => {
  const sizes = {
    footer: { width: 100, height: 50},
    small: { width: 150, height: 70 },
    medium: { width: 200, height: 100 },
    large: { width: 250, height: 120 },
  };

  return (
    <a href="https://apps.apple.com/us/app/gradient-connect/id6464495135" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/app_store.png"  // Path to Apple App Store badge in public/images
        alt="Download on the App Store"
        width={sizes[size].width}
        height={sizes[size].height}
      />
    </a>
  );
};

export default AppStoreBadge;
