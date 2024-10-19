
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shish-kebab` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=regular shish-kebab}
 * @preview ![shish-kebab](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuMjEyIDg0LjExOEM1MDcuMzM3IDU0LjM2OCA0OTAuMDg3IDI4LjM2OCA0NjMuNzEzIDEyLjg2OEM0MzMuMzM4IC00Ljc1NiAzOTUuNzE0IC00LjI1NiAzNjUuODM5IDE0LjI0M0MzMjMuMjE0IDQwLjk5MyAzMDcuNzE1IDkzLjk5MyAzMjkuOTY0IDEzOC44NjdDMzMxLjQ2NCAxNDEuNzQyIDMzMi4yMTQgMTQ1Ljk5MiAzMjkuOTY0IDE0OC4zNjdMMzA1LjcxNSAxNzIuNjE3TDI3My44NCAxNDAuNzQyQzI0Ni4yNzIgMTEzLjE3NCAyMDEuMTYgMTEzLjE3NCAxNzMuNTkxIDE0MC43NDJMMTQxLjg0MiAxNzIuNDkyQzEyOS44NDIgMTg0LjYxNyAxMjIuNTkyIDIwMC42MTcgMTIxLjU5MiAyMTcuNjE3QzEwNC41OTIgMjE4LjYxNyA4OC41OTIgMjI1Ljg2NyA3Ni40NjggMjM3Ljg2N0w0NC43MTggMjY5LjYxNkMxNy4xNSAyOTcuMTg1IDE3LjE1IDM0Mi4yOTcgNDQuNzE4IDM2OS44NjVMNzYuNDY4IDQwMS42MTVMNy4wNTYgNDcwLjk0NEMtMi4zNDYgNDgwLjMzIC0yLjM1MyA0OTUuNTY0IDcuMDQyIDUwNC45NThMNy4wNDIgNTA0Ljk1OEMxNi40MjUgNTE0LjM0MSAzMS42MzUgNTE0LjM0OCA0MS4wMjYgNTA0Ljk3M0wxMTAuNDY3IDQzNS42MTVMMTQyLjA5MiA0NjcuMjRDMTY5Ljg0MSA0OTQuODY0IDIxNC43MTYgNDk0Ljg2NCAyNDIuNDY1IDQ2Ny4yNEwyNzQuMDkgNDM1LjQ5QzI4Ni4yMTUgNDIzLjQ5IDI5My4zNCA0MDcuMzY1IDI5NC40NjUgMzkwLjM2NUMzMTEuNDY1IDM4OS4zNjUgMzI3LjQ2NCAzODIuMTE1IDMzOS41ODkgMzcwLjExNUwzNzEuMjE0IDMzOC4zNjZDMzk4Ljk2NCAzMTAuNzQxIDM5OC45NjQgMjY1Ljc0MSAzNzEuMjE0IDIzOC4xMTdMMzM5LjcxNCAyMDYuNDkyTDM2My44MzkgMTgyLjI0MkMzODAuNTg5IDE2NS42MTcgMzg0LjIxNCAxNDAuMTE3IDM3Mi45NjQgMTE3LjYxOEMzNjMuMzM5IDk4LjExOCAzNjYuOTY0IDY5LjM2OCAzOTIuNTg5IDU0LjI0M0M0MDYuNzEzIDQ1Ljc0MyA0MjQuMjEzIDQ1LjYxOCA0MzguNDYzIDUzLjc0M0M0NTIuNzEzIDYxLjc0MyA0NjEuNzEzIDc0Ljc0MyA0NjMuNTg4IDkwLjExOEM0NjQuOTU3IDEwMC40NTIgNDYyLjg1NCAxMTEuMDMzIDQ1Ny42NSAxMjAuMTM0QzQ1My45NzggMTI2LjU1MyA0NTQuMzg1IDEzNC40ODcgNDU5LjU4OCAxMzkuNzQyTDQ3MS44MzggMTUyLjExN0M0NzguNTI2IDE1OC44NzQgNDg5Ljk5IDE1OC4yMzUgNDk1LjMzNCAxNTAuMzcxQzUwOC41ODYgMTMwLjg3MSA1MTQuMjEyIDEwNy4zNjkgNTExLjIxMiA4NC4xMThaTTI0MC4yMTYgNDAxLjYxNUwyMDguNDY2IDQzMy4yNEMxOTkuNDY2IDQ0Mi4yNCAxODQuOTY2IDQ0Mi4yNCAxNzYuMDkxIDQzMy4yNEw3OC43MTggMzM1Ljk5MUM2OS43MTggMzI2Ljk5MSA2OS43MTggMzEyLjQ5MSA3OC43MTggMzAzLjQ5MUwxMTAuMzQyIDI3MS44NjZDMTE5LjM0MiAyNjIuODY2IDEzMy44NDIgMjYyLjg2NiAxNDIuODQyIDI3MS44NjZMMjQwLjA5MSAzNjkuMTE1QzI0OS4wOSAzNzguMTE1IDI0OS4wOSAzOTIuNjE1IDI0MC4wOTEgNDAxLjYxNUgyNDAuMjE2Wk0zMzcuMjE0IDMwNC40OTFMMzA1LjU5IDMzNi4xMTZDMjk2LjU5IDM0NS4xMTYgMjgyLjA5IDM0NS4xMTYgMjczLjA5IDMzNi4xMTZMMTc1Ljg0MSAyMzguODY3QzE2Ni44NDEgMjI5Ljg2NyAxNjYuODQxIDIxNS4zNjcgMTc1Ljg0MSAyMDYuMzY3TDIwNy40NjYgMTc0Ljc0MkMyMTYuNDY2IDE2NS43NDIgMjMwLjk2NiAxNjUuNzQyIDIzOS45NjYgMTc0Ljc0MkwzMzcuMjE0IDI3MS45OTFDMzQxLjU4OSAyNzYuMjQxIDM0My45NjQgMjgyLjExNiAzNDMuOTY0IDI4OC4yNDFDMzQzLjk2NCAyOTQuMzY2IDM0MS41ODkgMzAwLjExNiAzMzcuMjE0IDMwNC40OTFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ShishKebab(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M511.212 84.118C507.337 54.368 490.087 28.368 463.713 12.868C433.338 -4.756 395.714 -4.256 365.839 14.243C323.214 40.993 307.715 93.993 329.964 138.867C331.464 141.742 332.214 145.992 329.964 148.367L305.715 172.617L273.84 140.742C246.272 113.174 201.16 113.174 173.591 140.742L141.842 172.492C129.842 184.617 122.592 200.617 121.592 217.617C104.592 218.617 88.592 225.867 76.468 237.867L44.718 269.616C17.15 297.185 17.15 342.297 44.718 369.865L76.468 401.615L7.056 470.944C-2.346 480.33 -2.353 495.564 7.042 504.958L7.042 504.958C16.425 514.341 31.635 514.348 41.026 504.973L110.467 435.615L142.092 467.24C169.841 494.864 214.716 494.864 242.465 467.24L274.09 435.49C286.215 423.49 293.34 407.365 294.465 390.365C311.465 389.365 327.464 382.115 339.589 370.115L371.214 338.366C398.964 310.741 398.964 265.741 371.214 238.117L339.714 206.492L363.839 182.242C380.589 165.617 384.214 140.117 372.964 117.618C363.339 98.118 366.964 69.368 392.589 54.243C406.713 45.743 424.213 45.618 438.463 53.743C452.713 61.743 461.713 74.743 463.588 90.118C464.957 100.452 462.854 111.033 457.65 120.134C453.978 126.553 454.385 134.487 459.588 139.742L471.838 152.117C478.526 158.874 489.99 158.235 495.334 150.371C508.586 130.871 514.212 107.369 511.212 84.118ZM240.216 401.615L208.466 433.24C199.466 442.24 184.966 442.24 176.091 433.24L78.718 335.991C69.718 326.991 69.718 312.491 78.718 303.491L110.342 271.866C119.342 262.866 133.842 262.866 142.842 271.866L240.091 369.115C249.09 378.115 249.09 392.615 240.091 401.615H240.216ZM337.214 304.491L305.59 336.116C296.59 345.116 282.09 345.116 273.09 336.116L175.841 238.867C166.841 229.867 166.841 215.367 175.841 206.367L207.466 174.742C216.466 165.742 230.966 165.742 239.966 174.742L337.214 271.991C341.589 276.241 343.964 282.116 343.964 288.241C343.964 294.366 341.589 300.116 337.214 304.491Z" />
        </Icon>
    </>
}