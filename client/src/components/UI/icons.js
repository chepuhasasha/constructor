export default {
  getPaths: function (name) {
    if (this.icons[name]) {
      return this.icons[name];
    }
    return this.icons.error;
  },
  icons: {
    plus: [
      "M74.9807 437.019C-25.0042 337.034 -25.0042 174.966 74.9807 74.9807C174.966 -25.0042 337.034 -25.0042 437.019 74.9807C537.004 174.966 537.004 337.034 437.019 437.019C337.034 537.004 174.966 537.004 74.9807 437.019ZM164.854 279.405L231.393 279.335L231.958 346.51C232.029 359.733 242.777 370.481 255.364 369.915C269.223 370.481 279.971 359.733 278.769 346.51L279.335 280.607L345.873 279.405C359.733 279.971 370.481 269.223 369.279 256C370.481 242.777 359.733 232.029 345.873 232.595L279.335 231.393L278.769 165.49C279.971 152.267 269.223 141.519 255.364 142.085C242.777 141.519 232.029 152.267 231.958 165.49L231.393 232.665L164.854 232.595C152.267 232.029 141.519 242.777 141.449 256C141.519 269.223 152.267 279.971 164.854 279.405Z",
    ],
    error: [
      "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256ZM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1Z",
    ],
    out: [
      "M504.914 273.35L334.239 444.025C319 459.264 292.586 448.596 292.586 426.754V329.225H154.42C140.909 329.225 130.038 318.355 130.038 304.843V207.315C130.038 193.803 140.909 182.932 154.42 182.932H292.586V85.4038C292.586 63.663 318.898 52.8942 334.239 68.1331L504.914 238.808C514.362 248.358 514.362 263.8 504.914 273.35ZM195.057 438.945V398.308C195.057 391.603 189.571 386.117 182.866 386.117H97.5286C79.5468 386.117 65.0191 371.589 65.0191 353.608V158.55C65.0191 140.568 79.5468 126.041 97.5286 126.041H182.866C189.571 126.041 195.057 120.555 195.057 113.85V73.2127C195.057 66.5076 189.571 61.0216 182.866 61.0216H97.5286C43.6847 61.0216 0 104.706 0 158.55V353.608C0 407.451 43.6847 451.136 97.5286 451.136H182.866C189.571 451.136 195.057 445.65 195.057 438.945Z",
    ],
    right: [
      "M247.4 2.14846C244.68 -0.672786 240.315 -0.785052 237.381 2.22521L211.976 28.2906L211.939 28.3279C208.785 31.5302 208.812 36.978 212.099 40.1782L212.113 40.1918L384.92 209.103H7.42551C3.75355 209.103 0 212.207 0 217.241V254.759C0 259.793 3.75355 262.897 7.42551 262.897H384.92L212.172 431.75C212.167 431.755 212.162 431.76 212.157 431.765C208.904 434.982 208.878 440.531 212.012 443.747L237.418 469.813L237.455 469.852C240.176 472.673 244.541 472.785 247.475 469.775L469.659 241.816L469.696 241.778C472.727 238.701 472.834 233.324 469.621 230.028L247.439 2.18879L247.4 2.14846Z",
    ],
    left: [
      "M224.6 469.852C227.32 472.673 231.685 472.785 234.619 469.775L260.024 443.709L260.061 443.672C263.215 440.47 263.188 435.022 259.901 431.822L259.887 431.808L87.0805 262.897H464.574C468.246 262.897 472 259.793 472 254.759V217.241C472 212.207 468.246 209.103 464.574 209.103H87.0805L259.828 40.2499C259.833 40.2449 259.838 40.2398 259.843 40.2348C263.096 37.0176 263.122 31.4691 259.988 28.2531L234.582 2.18694L234.545 2.14846C231.824 -0.672797 227.459 -0.785041 224.525 2.22521L2.34132 230.184L2.30378 230.222C-0.727162 233.299 -0.833607 238.676 2.37864 241.972L224.561 469.811L224.6 469.852Z",
    ],
    down: [
      "M469.852 247.4C472.673 244.68 472.785 240.315 469.775 237.381L443.709 211.976L443.672 211.939C440.47 208.785 435.022 208.812 431.822 212.099L431.808 212.113L262.897 384.92V7.42554C262.897 3.75358 259.793 3.05176e-05 254.759 3.05176e-05L217.241 3.05176e-05C212.207 3.05176e-05 209.103 3.75358 209.103 7.42554V384.92L40.2499 212.172C40.2449 212.167 40.2398 212.162 40.2348 212.157C37.0176 208.904 31.4691 208.878 28.2531 212.012L2.18694 237.418L2.14846 237.455C-0.672797 240.176 -0.785041 244.541 2.22521 247.475L230.184 469.659L230.222 469.696C233.299 472.727 238.676 472.834 241.972 469.621L469.811 247.439L469.852 247.4Z",
    ],
    up: [
      "M2.14846 224.6C-0.672786 227.32 -0.785052 231.685 2.22521 234.619L28.2906 260.024L28.3279 260.061C31.5302 263.215 36.978 263.188 40.1782 259.901L40.1918 259.887L209.103 87.0805V464.575C209.103 468.246 212.207 472 217.241 472H254.759C259.793 472 262.897 468.246 262.897 464.575V87.0805L431.75 259.828C431.755 259.833 431.76 259.838 431.765 259.843C434.982 263.096 440.531 263.122 443.747 259.988L469.813 234.582L469.852 234.545C472.673 231.824 472.785 227.459 469.775 224.525L241.816 2.34134L241.778 2.3038C238.701 -0.727146 233.324 -0.833592 230.028 2.37866L2.18879 224.561L2.14846 224.6Z",
    ],
    gap: [
      "M50 3.8147e-06L1.52588e-05 0L0 140L211 140V332H0V472H50V382H422V472H472V332H261V140L472 140V4.19617e-05L422 3.8147e-05V90L50 90L50 3.8147e-06Z",
    ],
    padding: [
      "M471 41H41V471H471V41ZM0 0V512H512V0H0Z",
      "M342 170H170V342H342V170ZM130 130V382H382V130H130Z",
    ],
  },
};
