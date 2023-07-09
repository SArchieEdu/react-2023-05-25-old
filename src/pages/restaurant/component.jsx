import { useState } from "react";

import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { useMount } from "../../hooks/use-mount";

export function RestaurantPage() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>
      <Outlet />
    </div>
  );
}
