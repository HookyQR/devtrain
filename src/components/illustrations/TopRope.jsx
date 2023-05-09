export function TopRope({ livesLeft }) {
  const heights = [224, 220, 215, 205, 190, 182, 175];

  const defaultHeight = 224;
  const viewBoxMaskHeight = heights[livesLeft]?.height || defaultHeight;

  return (
    <svg
      viewBox="0 0 75 224"
      height={viewBoxMaskHeight}
      width="75"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        transform="translate(18.399767 -237.179341)"
      >
        <path
          d="m0 0c5.7193074 126.291859 6.95430625 261.77824 7.05261597 396.844465-1.07806317 1.297817-1.50706016 1.960562-1.28699097 1.988236.37048425.046589 1.28071319-.57077 2.5-1 .21162446-.074499.59857423 1.980322 1 2 .35564852.017123.72181181-1.50406 1-1.5.8589915.012535 2.3715757 1.704341 3 1.5.2455879-.079857-.3391284-.889031-1.7541491-2.427525-.6088215-140.449868-1.95925166-341.3329101-4.78100715-391.59468358-.52943283-9.43038233-3.99739571-.01274231-5.99609375-.01911346z"
          fill="#fff"
        />
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d="m9.265625 399.332701v53c-.33333333 1.666667-.5 2.833333-.5 3.5 0 1 1 2.5 0 3.5" />
          <path d="m7.265625 398.332701v28.75c0 .811388-.26316702 1.600889-.75 2.25-.43034678.573796-.37328507 1.376715.13388348 1.883883l.23223304.232233c.50716855.507169.56423026 1.310088.13388348 1.883884-.45964955.612866-.53358555 1.432829-.19098301 2.118034l.44098301.881966" />
          <path d="m11.265625 399.332701v6.5c0 2.666667.6666667 4.333333 2 5" />
        </g>
        <path d="m11.265625 398.832701v3" strokeLinecap="square" />
        <path d="m6.81933594 390.612486c1.54085286.770182 3.08170573 1.540365 4.62255856 2.310547" />
        <path d="m6.92675781 384.825865c1.68212901.416341 3.36425769.832682 5.04638669 1.249023" />
        <path d="m6.83251953 379.35272c1.50651042.327312 3.01302083.654623 4.51953127.981934" />
        <path d="m6.97070312 374.393736c1.37190756.410319 2.74381511.820638 4.11572268 1.230957" />
        <path d="m6.96533203 368.231627c1.49804688.572265 2.99609375 1.144531 4.49414067 1.716797" />
        <path d="m6.71679688 362.33026c1.50553385.567871 3.0110677 1.135742 4.51660152 1.703613" />
        <path d="m6.83203125 356.224303c1.53320322.464192 3.06640616.928385 4.59960935 1.392578" />
        <path d="m6.88134766 349.800963c1.64827474.555826 3.29654944 1.111653 4.94482424 1.66748" />
        <path d="m6.66015625 343.324888c1.44466146.576823 2.88932292 1.153646 4.33398435 1.730469" />
        <path d="m7.00341797 338.495299c1.56445312.52539 3.12890623 1.050781 4.69335933 1.576171" />
        <path d="m6.82910156 333.256041c1.33284505.514648 2.66569011 1.029297 3.99853514 1.543945" />
        <path d="m6.86083984 327.299498c1.48714193.263834 2.97428386.527669 4.46142576.791504" />
        <path d="m7.046875 321.93524c1.62727865.419922 3.2545573.839844 4.8818359 1.259766" />
        <path d="m6.89892578 315.274595c1.50162761.710612 3.00325521 1.421224 4.50488282 2.131836" />
        <path d="m6.77246094 309.379088c1.2828776.638997 2.56575521 1.277994 3.84863286 1.916992" />
        <path d="m6.86230469 305.335631c1.3971355.308431 2.79427075.616862 4.19140621.925293" />
        <path d="m6.50878906 299.018736c1.72916667.680339 3.45833334 1.360677 5.18750004 2.041016" />
        <path d="m6.44726562 292.678404c1.3639323.548665 2.72786459 1.097331 4.09179688 1.645996" />
        <path d="m6.66601562 286.161314c1.35823576.446289 2.71647128.892578 4.07470708 1.338867" />
        <path d="m6.46826172 280.342467c1.68408203.517415 3.36816406 1.03483 5.05224608 1.552246" />
        <path d="m6.25927734 272.795103c1.48404948.611979 2.96809896 1.223959 4.45214846 1.835938" />
        <path d="m6.21582031 267.755064c1.42610686.376791 2.85221346.753581 4.27832029 1.130371" />
        <path d="m6.24658203 261.27606c1.72200521.358399 3.44401042.716797 5.16601567 1.075196" />
        <path d="m6.07128906 254.821959c1.48014332.279785 2.96028637.55957 4.44042974.839355" />
        <path d="m6.15869141 249.15399c1.73258463.546549 3.46516927 1.093099 5.19775389 1.639648" />
        <path d="m6.15673828 243.567564c1.44645182.317871 2.89290365.635742 4.33935552.953614" />
        <path d="m6.14599609 237.996763c1.62272145.414551 3.24544262.829102 4.86816411 1.243653" />
      </g>
    </svg>
  );
}
