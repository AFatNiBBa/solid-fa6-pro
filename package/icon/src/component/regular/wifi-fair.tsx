
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wifi-fair` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-fair?s=regular wifi-fair}
 * @preview ![wifi-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDAzIDM2OEMyODkuMDc1IDM2OCAyNjQuMDAzIDM5My4wNyAyNjQuMDAzIDQyNFMyODkuMDc1IDQ4MCAzMjAuMDAzIDQ4MFMzNzYuMDAzIDQ1NC45MyAzNzYuMDAzIDQyNFMzNTAuOTMxIDM2OCAzMjAuMDAzIDM2OFpNNTIwLjYyNiAyODYuNjg4QzQ2Ny44NzYgMjM1LjkzOCAzOTYuNjI4IDIwOCAzMjAuMDAzIDIwOFMxNzIuMTMgMjM1LjkzOCAxMTkuMzggMjg2LjY4OEMxMDkuODE4IDI5NS45MDYgMTA5LjUwNSAzMTEuMDk0IDExOC42OTIgMzIwLjYyNUMxMjcuOTExIDMzMC4yNSAxNDMuMDk5IDMzMC40NjkgMTUyLjYzIDMyMS4zMTJDMTk2LjQxMSAyNzkuMTg4IDI1NS44NDcgMjU2IDMyMC4wMDMgMjU2UzQ0My41OTUgMjc5LjE4OCA0ODcuMzc2IDMyMS4zMTJDNDkyLjAzMiAzMjUuNzgxIDQ5OC4wMDEgMzI4IDUwNC4wMDEgMzI4QzUxMC4yODIgMzI4IDUxNi41OTUgMzI1LjUzMSA1MjEuMzE0IDMyMC42MjVDNTMwLjUwMSAzMTEuMDk0IDUzMC4xODkgMjk1LjkwNiA1MjAuNjI2IDI4Ni42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WifiFair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320.003 368C289.075 368 264.003 393.07 264.003 424S289.075 480 320.003 480S376.003 454.93 376.003 424S350.931 368 320.003 368ZM520.626 286.688C467.876 235.938 396.628 208 320.003 208S172.13 235.938 119.38 286.688C109.818 295.906 109.505 311.094 118.692 320.625C127.911 330.25 143.099 330.469 152.63 321.312C196.411 279.188 255.847 256 320.003 256S443.595 279.188 487.376 321.312C492.032 325.781 498.001 328 504.001 328C510.282 328 516.595 325.531 521.314 320.625C530.501 311.094 530.189 295.906 520.626 286.688Z" />
        </Icon>
    </>
}