'use client';

import { ScrollProgress } from "./ui/ScrollProgress";
import { CustomCursor } from "./ui/CustomCursor";
import LoadingScreen from "./ui/LoadingScreen";

export function ClientComponents() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
    </>
  );
} 