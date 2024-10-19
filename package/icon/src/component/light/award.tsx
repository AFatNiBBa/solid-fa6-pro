
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `award` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/award?s=light award}
 * @preview ![award](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguMDE0IDM1OC4zMDVDMzAxLjk5OCAzNTAuMjE3IDMwNS41NDUgMzI4LjI2NCAzMTYuODg5IDMxNi45MThDMzI4LjI0IDMwNS41NjggMzUwLjE5MSAzMDIuMDI3IDM1OC4yODUgMjg4LjA0M0MzNjYuMjY1IDI3NC4yNTYgMzU4LjQ0NSAyNTMuNTEgMzYyLjY1MiAyMzcuNzY0QzM2Ni43MjYgMjIyLjUzNSAzODMuOTk2IDIwOC41MTQgMzgzLjk5NiAxOTJDMzgzLjk5NiAxNzUuNDk4IDM2Ni43MyAxNjEuNDg0IDM2Mi42NiAxNDYuMjY2QzM1OC40NTMgMTMwLjUyIDM2Ni4yNzcgMTA5Ljc3MyAzNTguMzAxIDk1Ljk4NkMzNTAuMjE1IDgyLjAwNiAzMjguMjY0IDc4LjQ1OSAzMTYuOTIgNjcuMTA5QzMwNS41NjggNTUuNzYgMzAyLjAyNSAzMy44MDcgMjg4LjA0NSAyNS43MTNDMjc0LjI4OSAxNy43NSAyNTMuNDM5IDI1LjUzMyAyMzcuNzY1IDIxLjM0NEMyMjIuNTM1IDE3LjI3MSAyMDguNTE1IDAgMTkyIDBDMTc1LjUgMCAxNjEuNDg0IDE3LjI3IDE0Ni4yNjUgMjEuMzM2QzEzMC41MDggMjUuNTQ1IDEwOS43NDQgMTcuNzMyIDk1Ljk5IDI1LjY5NUM4Mi4wMSAzMy43ODMgNzguNDYzIDU1LjczNiA2Ny4xMTUgNjcuMDgyQzU1Ljc2NyA3OC40MzIgMzMuODEyIDgxLjk3MyAyNS43MjMgOTUuOTU3QzE3LjczOCAxMDkuNzQ0IDI1LjU1OCAxMzAuNDkgMjEuMzUxIDE0Ni4yMzZDMTcuMjc3IDE2MS40NjUgMC4wMDQgMTc1LjQ4NiAwLjAwNCAxOTJDMC4wMDQgMjA4LjUwMiAxNy4yNzcgMjIyLjUxNiAyMS4zNDQgMjM3LjczNEMyNS41NTEgMjUzLjQ4IDE3LjcyMyAyNzQuMjI3IDI1LjY5OSAyODguMDE0QzMzLjc5MyAzMDEuOTk0IDU1Ljc0IDMwNS41NDEgNjcuMDg0IDMxNi44OTFDNzguNDM1IDMyOC4yNCA4MS45NzggMzUwLjE5MyA5NS45NTkgMzU4LjI4N0MxMDkuNzAzIDM2Ni4yMzggMTMwLjU2MiAzNTguNDU3IDE0Ni4yMzggMzYyLjY1NkMxNjEuNDY5IDM2Ni43MjkgMTc1LjQ4OCAzODQgMTkyIDM4NEMyMDguNSAzODQgMjIyLjUxOSAzNjYuNzMgMjM3LjczOCAzNjIuNjY0QzI1My40NTcgMzU4LjQ1NyAyNzQuMjI2IDM2Ni4yNzUgMjg4LjAxNCAzNTguMzA1Wk0xOTEuOTk2IDM1MS41NDFDMTgzLjk2NyAzNDcuNTM5IDE3MS4xOTkgMzM2LjIwMyAxNTQuNTE3IDMzMS43NDZDMTM3LjgxMiAzMjcuMjcgMTIxLjQ4IDMzMC40NDUgMTEyLjIyNCAzMzAuMDI5QzEwNy4yNzEgMzIyLjE5MSAxMDEuODMgMzA2LjM4MSA4OS43MTcgMjk0LjI2OEM3Ny42MDMgMjgyLjE0OCA2MS44NjcgMjc2Ljc2NCA1My45NDcgMjcxLjc0NEM1My41OTIgMjYyLjQ5MiA1Ni43MDEgMjQ2LjEwOSA1Mi4yNTggMjI5LjQ3M0M0Ny43OTMgMjEyLjc2MiAzNi40OTIgMjAwLjA4MiAzMi40NjMgMTkxLjk5NEMzNi40NTkgMTgzLjk2OSA0Ny43OTEgMTcxLjIyMSA1Mi4yNjUgMTU0LjQ5NkM1Ni42OTkgMTM3Ljg5OCA1My41OTYgMTIxLjYyMSA1My45NjMgMTEyLjIyOUM2MS44MTYgMTA3LjI1OCA3Ny41OTggMTAxLjg1NSA4OS43NCA4OS43MTFDMTAxLjc3MyA3Ny42ODIgMTA3LjM0MiA2MS43MjEgMTEyLjI1IDUzLjk1M0MxMjEuNDQzIDUzLjU3NiAxMzcuODg5IDU2LjY5MSAxNTQuNTI3IDUyLjI1MkMxNzEuMjcxIDQ3Ljc3NyAxODMuODYxIDM2LjUxMiAxOTIuMDA2IDMyLjQ1OUMyMDAuMDMzIDM2LjQ1MSAyMTIuNzc3IDQ3Ljc4NSAyMjkuNSA1Mi4yNThDMjQ2LjIzNiA1Ni43MjkgMjYyLjUwOCA1My41NTMgMjcxLjc3OSA1My45NjlDMjc2LjYxOSA2MS42MTkgMjgyLjIyOCA3Ny42NzQgMjk0LjI4NyA4OS43M0MzMDYuMzIgMTAxLjc3MSAzMjIuMjg3IDEwNy4zMzYgMzMwLjA1NSAxMTIuMjUyQzMzMC40MSAxMjEuNTI1IDMyNy4zMDMgMTM3Ljg5MyAzMzEuNzQ4IDE1NC41MzNDMzM2LjIxNyAxNzEuMjM4IDM0Ny41MTQgMTgzLjkxNiAzNTEuNTM3IDE5Mi4wMDRDMzQ3LjU2IDIwMC4wMDQgMzM2LjIxMyAyMTIuNzc5IDMzMS43MzggMjI5LjUwNEMzMjcuMzM0IDI0NS45OTIgMzMwLjM5OCAyNjIuNTAyIDMzMC4wNDMgMjcxLjc3MUMzMjIuMTg1IDI3Ni43NCAzMDYuNDA2IDI4Mi4xNDYgMjk0LjI2IDI5NC4yOTFDMjgyLjIzMiAzMDYuMzIyIDI3Ni42NjYgMzIyLjI3OSAyNzEuNzU2IDMzMC4wNDVDMjYyLjU2IDMzMC40NTkgMjQ2LjIxNSAzMjcuMjcgMjI5LjQ3OCAzMzEuNzQ4QzIxMi43NjcgMzM2LjIxNSAyMDAuMDgyIDM0Ny41MSAxOTEuOTk2IDM1MS41NDFaTTI3OS45OTggMTkyQzI3OS45OTggMTQzLjMwMSAyNDAuNjA1IDEwNCAxOTIgMTA0UzEwNC4wMDIgMTQzLjMwMSAxMDQuMDAyIDE5MkMxMDQuMDAyIDI0MC41ODIgMTQzLjM5NCAyODAgMTkyIDI4MFMyNzkuOTk4IDI0MC41ODIgMjc5Ljk5OCAxOTJaTTE5MiAyNDhDMTYxLjEyMyAyNDggMTM2LjAwMiAyMjIuODc3IDEzNi4wMDIgMTkyQzEzNi4wMDIgMTYxLjEyMSAxNjEuMTIzIDEzNiAxOTIgMTM2UzI0Ny45OTggMTYxLjEyMSAyNDcuOTk4IDE5MkMyNDcuOTk4IDIyMi44NzcgMjIyLjg3NyAyNDggMTkyIDI0OFpNMzU3LjM4NyAzNzAuMTA5QzM1NC4xMzcgMzYxLjg5MSAzNDQuODA4IDM1Ny45MDYgMzM2LjYyMyAzNjEuMTI1QzMyOC40MiAzNjQuMzc1IDMyNC4zODkgMzczLjY3MiAzMjcuNjM5IDM4MS44OTFMMzUxLjg1NSA0NDMuMTQxTDMwNC4zNzMgNDM2LjU3OEwyNzkuNzMyIDQ3OC44NTlMMjU0LjgxIDQxNy42NTZDMjUxLjQ4MiA0MDkuNDUzIDI0Mi4wOTIgNDA1LjUxNiAyMzMuOTY5IDQwOC44NzVDMjI1Ljc4MSA0MTIuMjAzIDIyMS44NDQgNDIxLjUzMSAyMjUuMTg3IDQyOS43MTlMMjUwLjA5MiA0OTAuOTA2QzI1NS4xNTQgNTAzLjM1OSAyNjYuNjIzIDUxMS40MzggMjgxLjQyIDUxMkMyOTQuMjQ4IDUxMiAzMDUuNzk1IDUwNC44NzUgMzExLjU0NSA0OTMuNDA2TDMyMS45NjcgNDcyLjc2NkwzNDMuNDggNDc3LjA3OEMzNTUuNjA1IDQ3OS42MjUgMzY4LjE2OCA0NzUuMTcyIDM3Ni4xNTIgNDY1LjU3OEMzODQuMTA1IDQ1Ni4wMzEgMzg2LjE4MyA0NDIuOTIyIDM4MS42MDUgNDMxLjM1OUwzNTcuMzg3IDM3MC4xMDlaTTE1MC4wMzEgNDA4Ljg3NUMxNDEuODkyIDQwNS41IDEzMi41MDIgNDA5LjQ2OSAxMjkuMTg5IDQxNy42NTZMMTA0LjI2NyA0NzguODU5TDc5LjYyNyA0MzYuNTc4TDMyLjE5MSA0NDMuMTI1TDMyLjE0NCA0NDMuMTQxTDU2LjM2MSAzODEuODkxQzU5LjYxMSAzNzMuNjcyIDU1LjU4IDM2NC4zNzUgNDcuMzc3IDM2MS4xMjVDMzkuMTQ0IDM1Ny45MDYgMjkuODYzIDM2MS44OTEgMjYuNjEzIDM3MC4xMDlMMi4zOTQgNDMxLjM1OUMtMi4xODQgNDQyLjkyMiAtMC4xMDYgNDU2LjAzMSA3Ljg0OCA0NjUuNTc4QzE1Ljg2MyA0NzUuMjAzIDI4LjM2MyA0NzkuNTc4IDQwLjQ1NyA0NzcuMDk0TDYyLjAzMyA0NzIuNzY2TDcyLjQzOSA0OTMuMzkxQzc4LjIwNSA1MDQuODQ0IDg5LjcwNSA1MTEuOTY5IDEwMy44NjEgNTExLjk2OUgxMDMuOTU1QzExNy4zNzcgNTExLjQzNyAxMjguODQ2IDUwMy4zNTkgMTMzLjg5MiA0OTAuOTIyTDE1OC44MTIgNDI5LjcxOUMxNjIuMTU2IDQyMS41MzEgMTU4LjIxOSA0MTIuMjAzIDE1MC4wMzEgNDA4Ljg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Award(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288.014 358.305C301.998 350.217 305.545 328.264 316.889 316.918C328.24 305.568 350.191 302.027 358.285 288.043C366.265 274.256 358.445 253.51 362.652 237.764C366.726 222.535 383.996 208.514 383.996 192C383.996 175.498 366.73 161.484 362.66 146.266C358.453 130.52 366.277 109.773 358.301 95.986C350.215 82.006 328.264 78.459 316.92 67.109C305.568 55.76 302.025 33.807 288.045 25.713C274.289 17.75 253.439 25.533 237.765 21.344C222.535 17.271 208.515 0 192 0C175.5 0 161.484 17.27 146.265 21.336C130.508 25.545 109.744 17.732 95.99 25.695C82.01 33.783 78.463 55.736 67.115 67.082C55.767 78.432 33.812 81.973 25.723 95.957C17.738 109.744 25.558 130.49 21.351 146.236C17.277 161.465 0.004 175.486 0.004 192C0.004 208.502 17.277 222.516 21.344 237.734C25.551 253.48 17.723 274.227 25.699 288.014C33.793 301.994 55.74 305.541 67.084 316.891C78.435 328.24 81.978 350.193 95.959 358.287C109.703 366.238 130.562 358.457 146.238 362.656C161.469 366.729 175.488 384 192 384C208.5 384 222.519 366.73 237.738 362.664C253.457 358.457 274.226 366.275 288.014 358.305ZM191.996 351.541C183.967 347.539 171.199 336.203 154.517 331.746C137.812 327.27 121.48 330.445 112.224 330.029C107.271 322.191 101.83 306.381 89.717 294.268C77.603 282.148 61.867 276.764 53.947 271.744C53.592 262.492 56.701 246.109 52.258 229.473C47.793 212.762 36.492 200.082 32.463 191.994C36.459 183.969 47.791 171.221 52.265 154.496C56.699 137.898 53.596 121.621 53.963 112.229C61.816 107.258 77.598 101.855 89.74 89.711C101.773 77.682 107.342 61.721 112.25 53.953C121.443 53.576 137.889 56.691 154.527 52.252C171.271 47.777 183.861 36.512 192.006 32.459C200.033 36.451 212.777 47.785 229.5 52.258C246.236 56.729 262.508 53.553 271.779 53.969C276.619 61.619 282.228 77.674 294.287 89.73C306.32 101.771 322.287 107.336 330.055 112.252C330.41 121.525 327.303 137.893 331.748 154.533C336.217 171.238 347.514 183.916 351.537 192.004C347.56 200.004 336.213 212.779 331.738 229.504C327.334 245.992 330.398 262.502 330.043 271.771C322.185 276.74 306.406 282.146 294.26 294.291C282.232 306.322 276.666 322.279 271.756 330.045C262.56 330.459 246.215 327.27 229.478 331.748C212.767 336.215 200.082 347.51 191.996 351.541ZM279.998 192C279.998 143.301 240.605 104 192 104S104.002 143.301 104.002 192C104.002 240.582 143.394 280 192 280S279.998 240.582 279.998 192ZM192 248C161.123 248 136.002 222.877 136.002 192C136.002 161.121 161.123 136 192 136S247.998 161.121 247.998 192C247.998 222.877 222.877 248 192 248ZM357.387 370.109C354.137 361.891 344.808 357.906 336.623 361.125C328.42 364.375 324.389 373.672 327.639 381.891L351.855 443.141L304.373 436.578L279.732 478.859L254.81 417.656C251.482 409.453 242.092 405.516 233.969 408.875C225.781 412.203 221.844 421.531 225.187 429.719L250.092 490.906C255.154 503.359 266.623 511.438 281.42 512C294.248 512 305.795 504.875 311.545 493.406L321.967 472.766L343.48 477.078C355.605 479.625 368.168 475.172 376.152 465.578C384.105 456.031 386.183 442.922 381.605 431.359L357.387 370.109ZM150.031 408.875C141.892 405.5 132.502 409.469 129.189 417.656L104.267 478.859L79.627 436.578L32.191 443.125L32.144 443.141L56.361 381.891C59.611 373.672 55.58 364.375 47.377 361.125C39.144 357.906 29.863 361.891 26.613 370.109L2.394 431.359C-2.184 442.922 -0.106 456.031 7.848 465.578C15.863 475.203 28.363 479.578 40.457 477.094L62.033 472.766L72.439 493.391C78.205 504.844 89.705 511.969 103.861 511.969H103.955C117.377 511.437 128.846 503.359 133.892 490.922L158.812 429.719C162.156 421.531 158.219 412.203 150.031 408.875Z" />
        </Icon>
    </>
}