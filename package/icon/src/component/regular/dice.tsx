
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=regular dice}
 * @preview ![dice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYuMDE1IDE5Mkg0NzMuODE0QzQ3Ny4zNjUgMjAyLjExMSA0NzkuNTYyIDIxMi43MzQgNDc5LjU2MiAyMjMuNzY2QzQ3OS41NjIgMjQ5LjQwNiA0NjkuNTc4IDI3My41MTYgNDUxLjQzNyAyOTEuNjU2TDMyMC4wMTUgNDIzLjA2NFY0NDhDMzIwLjAxNSA0ODMuMzQ2IDM0OC42NjkgNTEyIDM4NC4wMTUgNTEySDU3Ni4wMTVDNjExLjM2MSA1MTIgNjQwLjAxNSA0ODMuMzQ2IDY0MC4wMTUgNDQ4VjI1NkM2NDAuMDE1IDIyMC42NTIgNjExLjM2MSAxOTIgNTc2LjAxNSAxOTJaTTQ4MC4wMTUgMzc2QzQ2Ni43NjEgMzc2IDQ1Ni4wMTUgMzY1LjI1NCA0NTYuMDE1IDM1MkM0NTYuMDE1IDMzOC43NDQgNDY2Ljc2MSAzMjggNDgwLjAxNSAzMjhTNTA0LjAxNSAzMzguNzQ0IDUwNC4wMTUgMzUyQzUwNC4wMTUgMzY1LjI1NCA0OTMuMjY5IDM3NiA0ODAuMDE1IDM3NlpNNDQ3LjU1OCAyMjMuNzYzQzQ0Ny41NTggMjA3LjM4NCA0NDEuMzA5IDE5MS4wMDUgNDI4LjgxMiAxNzguNTA4TDI2OS4wMzMgMTguNzNDMjU2LjUzNyA2LjIzNCAyNDAuMTU4IC0wLjAxNiAyMjMuNzc5IC0wLjAxNlMxOTEuMDIxIDYuMjM0IDE3OC41MjMgMTguNzNMMTguNzQ2IDE3OC41MDhDNi4yNDkgMTkxLjAwNSAwIDIwNy4zODQgMCAyMjMuNzYzUzYuMjQ5IDI1Ni41MjEgMTguNzQ2IDI2OS4wMThMMTc4LjUyMyA0MjguNzk3QzE5MS4wMjEgNDQxLjI5MyAyMDcuNCA0NDcuNTQxIDIyMy43NzkgNDQ3LjU0MVMyNTYuNTM3IDQ0MS4yOTMgMjY5LjAzMyA0MjguNzk3TDQyOC44MTIgMjY5LjAxOEM0NDEuMzA5IDI1Ni41MjEgNDQ3LjU1OCAyNDAuMTQzIDQ0Ny41NTggMjIzLjc2M1pNMzk0Ljg3MSAyMzUuMDc2TDIzNS4wOTEgMzk0Ljg1NUMyMzEuMDE1IDM5OC45MzIgMjI2LjI1MyAzOTkuNTQxIDIyMy43NzkgMzk5LjU0MUMyMjEuMzAyIDM5OS41NDEgMjE2LjU0MSAzOTguOTMyIDIxMi40NjQgMzk0Ljg1NUw1Mi42ODcgMjM1LjA3NkM0OC42MDkgMjMxIDQ4LjAwMSAyMjYuMjM4IDQ4LjAwMSAyMjMuNzY0UzQ4LjYwOSAyMTYuNTI3IDUyLjY4NyAyMTIuNDQ5TDIxMi40NiA1Mi42NzRDMjE2LjU0MiA0OC41OTQgMjIxLjMwNCA0Ny45ODQgMjIzLjc3OSA0Ny45ODRTMjMxLjAxMyA0OC41OTQgMjM1LjA5MSA1Mi42NzJMMzk0Ljg3MSAyMTIuNDQ5QzM5OC45NDkgMjE2LjUyNyAzOTkuNTU4IDIyMS4yODkgMzk5LjU1OCAyMjMuNzY0UzM5OC45NDkgMjMxIDM5NC44NzEgMjM1LjA3NlpNMjIzLjc3OSAzMDEuNTg4QzIxMC45ODggMzAxLjU4OCAxOTkuNzggMzExLjg3OCAxOTkuNzggMzI1LjU4OEMxOTkuNzggMzM5LjM0MyAyMTEuMDMgMzQ5LjU4OCAyMjMuNzc5IDM0OS41ODhDMjM3LjUwOCAzNDkuNTg4IDI0Ny43NzkgMzM4LjM2NCAyNDcuNzc5IDMyNS41ODhDMjQ3Ljc3OSAzMTIuNzkyIDIzNy40ODUgMzAxLjU4OCAyMjMuNzc5IDMwMS41ODhaTTIyMy43NzkgMTk5Ljc2NkMyMTAuMDE4IDE5OS43NjYgMTk5Ljc4IDIxMS4wMTUgMTk5Ljc4IDIyMy43NjRDMTk5Ljc4IDIzNi42MDcgMjEwLjEyMyAyNDcuNzY0IDIyMy43NzkgMjQ3Ljc2NEMyMzcuNDkyIDI0Ny43NjQgMjQ3Ljc3OSAyMzYuNTU5IDI0Ny43NzkgMjIzLjc2NEMyNDcuNzc5IDIxMC45NzMgMjM3LjQ5IDE5OS43NjYgMjIzLjc3OSAxOTkuNzY2Wk0xMjEuOTU3IDE5OS43NjZDMTA4LjIgMTk5Ljc2NiA5Ny45NTYgMjExLjAxNCA5Ny45NTYgMjIzLjc2NEM5Ny45NTYgMjM2LjU1OCAxMDguMjUgMjQ3Ljc2NCAxMjEuOTU3IDI0Ny43NjRDMTM1LjY2MyAyNDcuNzY0IDE0NS45NTYgMjM2LjU2NiAxNDUuOTU2IDIyMy43NjRDMTQ1Ljk1NiAyMTAuOTczIDEzNS42NjcgMTk5Ljc2NiAxMjEuOTU3IDE5OS43NjZaTTMyNS42MDMgMTk5Ljc2NkMzMTEuODQ3IDE5OS43NjYgMzAxLjYwMyAyMTEuMDE0IDMwMS42MDMgMjIzLjc2NEMzMDEuNjAzIDIzNi41NTggMzExLjg5NyAyNDcuNzY0IDMyNS42MDMgMjQ3Ljc2NEMzMzkuMzE3IDI0Ny43NjQgMzQ5LjYwNCAyMzYuNTU5IDM0OS42MDQgMjIzLjc2NEMzNDkuNjA0IDIxMC45NzMgMzM5LjMxNCAxOTkuNzY2IDMyNS42MDMgMTk5Ljc2NlpNMjIzLjc3OSA5Ny45NDFDMjEwLjk4OCA5Ny45NDEgMTk5Ljc4IDEwOC4yMzIgMTk5Ljc4IDEyMS45NDFDMTk5Ljc4IDEzNS42OTcgMjExLjAzIDE0NS45NDEgMjIzLjc3OSAxNDUuOTQxQzIzNy41MDggMTQ1Ljk0MSAyNDcuNzc5IDEzNC43MTcgMjQ3Ljc3OSAxMjEuOTQxQzI0Ny43NzkgMTA5LjE0NiAyMzcuNDg1IDk3Ljk0MSAyMjMuNzc5IDk3Ljk0MVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Dice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576.015 192H473.814C477.365 202.111 479.562 212.734 479.562 223.766C479.562 249.406 469.578 273.516 451.437 291.656L320.015 423.064V448C320.015 483.346 348.669 512 384.015 512H576.015C611.361 512 640.015 483.346 640.015 448V256C640.015 220.652 611.361 192 576.015 192ZM480.015 376C466.761 376 456.015 365.254 456.015 352C456.015 338.744 466.761 328 480.015 328S504.015 338.744 504.015 352C504.015 365.254 493.269 376 480.015 376ZM447.558 223.763C447.558 207.384 441.309 191.005 428.812 178.508L269.033 18.73C256.537 6.234 240.158 -0.016 223.779 -0.016S191.021 6.234 178.523 18.73L18.746 178.508C6.249 191.005 0 207.384 0 223.763S6.249 256.521 18.746 269.018L178.523 428.797C191.021 441.293 207.4 447.541 223.779 447.541S256.537 441.293 269.033 428.797L428.812 269.018C441.309 256.521 447.558 240.143 447.558 223.763ZM394.871 235.076L235.091 394.855C231.015 398.932 226.253 399.541 223.779 399.541C221.302 399.541 216.541 398.932 212.464 394.855L52.687 235.076C48.609 231 48.001 226.238 48.001 223.764S48.609 216.527 52.687 212.449L212.46 52.674C216.542 48.594 221.304 47.984 223.779 47.984S231.013 48.594 235.091 52.672L394.871 212.449C398.949 216.527 399.558 221.289 399.558 223.764S398.949 231 394.871 235.076ZM223.779 301.588C210.988 301.588 199.78 311.878 199.78 325.588C199.78 339.343 211.03 349.588 223.779 349.588C237.508 349.588 247.779 338.364 247.779 325.588C247.779 312.792 237.485 301.588 223.779 301.588ZM223.779 199.766C210.018 199.766 199.78 211.015 199.78 223.764C199.78 236.607 210.123 247.764 223.779 247.764C237.492 247.764 247.779 236.559 247.779 223.764C247.779 210.973 237.49 199.766 223.779 199.766ZM121.957 199.766C108.2 199.766 97.956 211.014 97.956 223.764C97.956 236.558 108.25 247.764 121.957 247.764C135.663 247.764 145.956 236.566 145.956 223.764C145.956 210.973 135.667 199.766 121.957 199.766ZM325.603 199.766C311.847 199.766 301.603 211.014 301.603 223.764C301.603 236.558 311.897 247.764 325.603 247.764C339.317 247.764 349.604 236.559 349.604 223.764C349.604 210.973 339.314 199.766 325.603 199.766ZM223.779 97.941C210.988 97.941 199.78 108.232 199.78 121.941C199.78 135.697 211.03 145.941 223.779 145.941C237.508 145.941 247.779 134.717 247.779 121.941C247.779 109.146 237.485 97.941 223.779 97.941Z " />
        </Icon>
    </>
}