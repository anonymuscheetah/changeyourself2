import React from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ZoomWrapperProps {
  children: React.ReactNode;
}

export function ZoomWrapper({ children }: ZoomWrapperProps) {
  return (
    <div className="relative w-full h-[calc(100vh-6rem)] overflow-hidden">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={2}
        centerOnInit
        limitToBounds={false}
      >
        {({ zoomIn, zoomOut, resetTransform }: ReactZoomPanPinchRef) => (
          <>
            <div className="absolute top-4 right-4 flex gap-2 z-50">
              <button
                onClick={() => zoomIn()}
                className="p-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg backdrop-blur-sm"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => zoomOut()}
                className="p-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg backdrop-blur-sm"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => resetTransform()}
                className="p-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-lg backdrop-blur-sm"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <TransformComponent
              wrapperClass="!w-full !h-full"
              contentClass="!w-full !h-full"
            >
              <div className="w-full h-full flex items-center justify-center">
                {children}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}