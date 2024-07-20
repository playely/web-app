export const createMockTouchEvent = (type: string): TouchEvent => {
    const touchPoint: Touch = {
      identifier: Date.now(),
      target: window,
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      radiusX: 0,
      radiusY: 0,
      rotationAngle: 0,
      force: 0,
      altitudeAngle: 0,
      azimuthAngle: 0,
      touchType: 'direct'
    } as unknown as Touch; // Casting to bypass missing properties that are not essential for the test
  
    return new TouchEvent(type, {
      changedTouches: [touchPoint] as any,
      touches: [touchPoint] as any,
      targetTouches: [touchPoint] as any,
    });
  }