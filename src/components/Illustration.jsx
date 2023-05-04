import { BottomRope } from "./illustrations/BottomRope";
import { TopRope } from "./illustrations/TopRope";

export function IllustrationWrapper({ livesLeft }) {
  return (
    <div className="illustration__wrapper">
      <TopRope {...{ livesLeft }} />
      <BottomRope {...{ livesLeft }} />
    </div>
  );
}
