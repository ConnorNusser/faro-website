import React from 'react';
import Image from 'next/image';

interface PlayStoreBadgeProps {
  size?: 'small' | 'medium' | 'large' | 'footer';
}

const PlayStoreBadge: React.FC<PlayStoreBadgeProps> = ({ size = 'medium' }) => {
  const sizes = {
    footer: { width: 100, height: 50},
    small: { width: 170, height: 70 },
    medium: { width: 220, height: 100 },
    large: { width: 280, height: 120 },
  };

  return (
    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/play_store.png"  // Path to Google Play badge in public/images
        alt="Get it on Google Play"
        width={sizes[size].width}
        height={sizes[size].height}
      />
    </a>
  );
};

export default PlayStoreBadge;
