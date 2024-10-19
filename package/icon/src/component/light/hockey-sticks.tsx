
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-sticks` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-sticks?s=light hockey-sticks}
 * @preview ![hockey-sticks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjYuNjQ1IDIxNS4xNTZDMjI5LjQyIDIyMC43NSAyMzQuOTg4IDIyNCAyNDAuNzg3IDIyNEMyNDMuMTYyIDIyNCAyNDUuNTY2IDIyMy40NjkgMjQ3LjgzNCAyMjIuMzEyQzI1NS42MzcgMjE4LjM0NCAyNTguNzk5IDIwOC43NSAyNTQuODk2IDIwMC44NDRMMTYxLjY3NCA2MS4wNzhDMTU2Ljc3IDUxLjE3MiAxNjAuNzY0IDM5LjA0NyAxNzAuNTI1IDM0LjA3OEMxODAuMTA0IDI5LjI5NyAxOTIuMDA4IDMzLjA3OCAxOTcuMDA0IDQyLjc2NkwyNjkuNDM5IDEzNi41QzI3My40OCAxNDQuMzEyIDI4My4wNzIgMTQ3LjI4MSAyOTAuNzUyIDE0My4yNUMyOTguNDc5IDEzOS4xMjUgMzAxLjQ3MSAxMjkuNDY5IDI5Ny40MTQgMTIxLjYyNUwyMjQuOTc5IDI3LjkyMkMyMTIuMDg4IDIuOTIyIDE4MS4zMiAtNy4yMDMgMTU2LjQgNS40NTNDMTMxLjA2MiAxOC4zMjggMTIwLjc0NiA0OS43MDMgMTMzLjQyMiA3NS4zOTFMMjI2LjY0NSAyMTUuMTU2Wk01OTIgMzM2SDQwMEMzOTEuMTU2IDMzNiAzODQgMzQzLjE1NiAzODQgMzUyUzM5MS4xNTYgMzY4IDQwMCAzNjhINTI4VjQ4MEg0MjMuNTQ3QzQwNS4yNSA0ODAgMzg4LjgxMiA0NjkuODQ0IDM4MC42MjUgNDUzLjQ2OUwzNzAuMDMxIDQzMi4yODFDMzY2LjA3OCA0MjQuNDA2IDM1Ni40NjkgNDIxLjE1NiAzNDguNTYyIDQyNS4xMjVTMzM3LjQ1MyA0MzguNjg3IDM0MS40MDYgNDQ2LjU5NEwzNTIgNDY3Ljc4MUMzNjUuNjQxIDQ5NS4wNjIgMzkzLjA0NyA1MTIgNDIzLjU0NyA1MTJINTkyQzYxOC40NjkgNTEyIDY0MCA0OTAuNDY5IDY0MCA0NjRWMzg0QzY0MCAzNTcuNTMxIDYxOC40NjkgMzM2IDU5MiAzMzZaTTYwOCA0NjRDNjA4IDQ3Mi44MTIgNjAwLjgyOCA0ODAgNTkyIDQ4MEg1NjBWMzY4SDU5MkM2MDAuODI4IDM2OCA2MDggMzc1LjE4OCA2MDggMzg0VjQ2NFpNNDgzLjE5NSA1LjQ1N0M0NTcuOTYxIC03LjE5OSA0MjYuODA1IDIuOTI2IDQxMy43NDIgMjcuODk1TDIzMC4zMTIgMzM2SDQ4QzIxLjUzMSAzMzYgMCAzNTcuNTMxIDAgMzg0VjQ2NEMwIDQ5MC40NjkgMjEuNTMxIDUxMiA0OCA1MTJIMjE2LjQ1M0MyNDYuOTUzIDUxMiAyNzQuMzU5IDQ5NS4wNjIgMjg4IDQ2Ny43ODFMNTA2LjUwOCA3NS4zOTVDNTE5LjM1MiA0OS43MDcgNTA4Ljg5OCAxOC4zMzIgNDgzLjE5NSA1LjQ1N1pNODAgNDgwSDQ4QzM5LjE3MiA0ODAgMzIgNDcyLjgxMiAzMiA0NjRWMzg0QzMyIDM3NS4xODggMzkuMTcyIDM2OCA0OCAzNjhIODBWNDgwWk00NzcuODgzIDYxLjA4MkwyNTkuMzc1IDQ1My40NjlDMjUxLjE4OCA0NjkuODQ0IDIzNC43NSA0ODAgMjE2LjQ1MyA0ODBIMTEyVjM2OEgyNDBDMjQ1Ljk1MyAzNjggMjUxLjQwNiAzNjQuNjg4IDI1NC4xNzIgMzU5LjQzOEw0NDIuMDg2IDQyLjczOEM0NDcuMTY0IDMzLjE0NSA0NTkuMjExIDI5LjIwNyA0NjguODgzIDM0LjA4MkM0NzguODA1IDM5LjA1MSA0ODIuODUyIDUxLjE3NiA0NzcuODgzIDYxLjA4MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HockeySticks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M226.645 215.156C229.42 220.75 234.988 224 240.787 224C243.162 224 245.566 223.469 247.834 222.312C255.637 218.344 258.799 208.75 254.896 200.844L161.674 61.078C156.77 51.172 160.764 39.047 170.525 34.078C180.104 29.297 192.008 33.078 197.004 42.766L269.439 136.5C273.48 144.312 283.072 147.281 290.752 143.25C298.479 139.125 301.471 129.469 297.414 121.625L224.979 27.922C212.088 2.922 181.32 -7.203 156.4 5.453C131.062 18.328 120.746 49.703 133.422 75.391L226.645 215.156ZM592 336H400C391.156 336 384 343.156 384 352S391.156 368 400 368H528V480H423.547C405.25 480 388.812 469.844 380.625 453.469L370.031 432.281C366.078 424.406 356.469 421.156 348.562 425.125S337.453 438.687 341.406 446.594L352 467.781C365.641 495.062 393.047 512 423.547 512H592C618.469 512 640 490.469 640 464V384C640 357.531 618.469 336 592 336ZM608 464C608 472.812 600.828 480 592 480H560V368H592C600.828 368 608 375.188 608 384V464ZM483.195 5.457C457.961 -7.199 426.805 2.926 413.742 27.895L230.312 336H48C21.531 336 0 357.531 0 384V464C0 490.469 21.531 512 48 512H216.453C246.953 512 274.359 495.062 288 467.781L506.508 75.395C519.352 49.707 508.898 18.332 483.195 5.457ZM80 480H48C39.172 480 32 472.812 32 464V384C32 375.188 39.172 368 48 368H80V480ZM477.883 61.082L259.375 453.469C251.188 469.844 234.75 480 216.453 480H112V368H240C245.953 368 251.406 364.688 254.172 359.438L442.086 42.738C447.164 33.145 459.211 29.207 468.883 34.082C478.805 39.051 482.852 51.176 477.883 61.082Z" />
        </Icon>
    </>
}