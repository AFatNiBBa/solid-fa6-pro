
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `section` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/section?s=thin section}
 * @preview ![section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODcuNjQzIDM0NS40NUMyMjQuMzI2IDMzNC43OTggMjQ4LjM0OCAzMTIuMjUxIDI1NC4zMTUgMjgwLjAyQzI2OC4wOTYgMjA1LjQxMyAxOTQuNzI5IDE4NS44MjMgMTI5Ljk4NiAxNjguNTE0TDExNC4xNzYgMTY0LjIzNUM0NC4zMDkgMTQ1LjA1MiA4LjE5IDEyNS4yNDMgMTcuNDA2IDc1LjUwNUMyNS44NzUgMjkuODI3IDgwLjg2NyA3LjgzMSAxNTcuNDIgMTguODI5QzE3My4xMzcgMjEuMTQxIDE5MS41NzIgMjUuNzk2IDIxNS41MDggMzMuNTQ0QzIxOS43MjcgMzQuODI1IDIyNC4yNTYgMzIuNTc3IDIyNS42IDI4LjM4OUMyMjYuOTQzIDI0LjE3MyAyMjQuNjMxIDE5LjY3MyAyMjAuNDQzIDE4LjI5OEMxOTUuNjM1IDEwLjMgMTc2LjMyNCA1LjQyNyAxNTkuNzMzIDMuMDJDNzMuOTMyIC05LjU0IDExLjg0NCAxNy43MzUgMS42NTggNzIuNTY3Qy04LjM0IDEyNi41ODUgMjguNTIyIDE1MS43NjggNjguMDI0IDE2Ni42NDVDMzEuNDU1IDE3Ny4zMzUgNy42MDkgMTk5Ljc4OCAxLjY1OCAyMzEuOTY5Qy0xMS45NjUgMzA1LjU3NyA2MS40MDEgMzI1LjcyOSAxMDkuOTI2IDMzOS4wNzFMMTI1Ljg2MSAzNDMuMzVDMTg5LjU0MSAzNjAuMzc4IDI0OS42OTIgMzc2LjQ2OCAyMzguNTY3IDQzNi40ODVDMjMwLjEzMSA0ODIuMSAxNzUuMzI0IDUwNC40NzEgOTguNTIyIDQ5My4xM0M3NC4yMTMgNDg5LjcyMyA0Ni43NDYgNDgwLjQ3NSAyMi41MzEgNDcyLjMyMUwxMC41MzMgNDY4LjI5MkM2LjM3NyA0NjYuOTQ4IDEuODE1IDQ2OS4xOTggMC40MDggNDczLjM1MkMtMC45NjcgNDc3LjU3MSAxLjI4MyA0ODIuMSA1LjQ3MSA0ODMuNDc1TDE3LjQwNiA0ODcuNDc1QzQyLjMxMSA0OTUuODQ4IDcwLjQ5NCA1MDUuMzc4IDk2LjI0IDUwOC45N0MxMTAuMTEzIDUxMS4wMDEgMTIzLjM2MyA1MTIuMDAxIDEzNS44OTMgNTEyLjAwMUMyMDAuNzkxIDUxMi4wMDEgMjQ1Ljc4NSA0ODUuMzgyIDI1NC4zMTUgNDM5LjQyM0MyNjMuOTg1IDM4Ny4wNjkgMjMwLjcwNSAzNjEuODQ1IDE4Ny42NDMgMzQ1LjQ1Wk0xMTQuMTc2IDMyMy42MzZDNDQuMzA5IDMwNC40NTIgOC4xOSAyODQuNjQ1IDE3LjQwNiAyMzQuOTA1QzIzLjQzNCAyMDIuMzExIDUzLjIyNyAxODEuNTA1IDk4Ljg2OSAxNzYuNTg5QzEwMi42NTEgMTc3LjY1OSAxMDYuMzY3IDE3OC42OSAxMDkuOTI2IDE3OS42NjlMMTI1Ljg2MSAxODMuOTQ4QzE4OS41NDEgMjAwLjk3NSAyNDkuNjkyIDIxNy4wNjUgMjM4LjU2NyAyNzcuMDg1QzIzMi41MzUgMzA5Ljc0NyAyMDIuMDI0IDMzMC4zOTkgMTU2LjUxOCAzMzUuMjIxQzE0Ny42NzIgMzMyLjY2MyAxMzguNzU0IDMzMC4yNjEgMTI5Ljk4NiAzMjcuOTE3TDExNC4xNzYgMzIzLjYzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Section(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M187.643 345.45C224.326 334.798 248.348 312.251 254.315 280.02C268.096 205.413 194.729 185.823 129.986 168.514L114.176 164.235C44.309 145.052 8.19 125.243 17.406 75.505C25.875 29.827 80.867 7.831 157.42 18.829C173.137 21.141 191.572 25.796 215.508 33.544C219.727 34.825 224.256 32.577 225.6 28.389C226.943 24.173 224.631 19.673 220.443 18.298C195.635 10.3 176.324 5.427 159.733 3.02C73.932 -9.54 11.844 17.735 1.658 72.567C-8.34 126.585 28.522 151.768 68.024 166.645C31.455 177.335 7.609 199.788 1.658 231.969C-11.965 305.577 61.401 325.729 109.926 339.071L125.861 343.35C189.541 360.378 249.692 376.468 238.567 436.485C230.131 482.1 175.324 504.471 98.522 493.13C74.213 489.723 46.746 480.475 22.531 472.321L10.533 468.292C6.377 466.948 1.815 469.198 0.408 473.352C-0.967 477.571 1.283 482.1 5.471 483.475L17.406 487.475C42.311 495.848 70.494 505.378 96.24 508.97C110.113 511.001 123.363 512.001 135.893 512.001C200.791 512.001 245.785 485.382 254.315 439.423C263.985 387.069 230.705 361.845 187.643 345.45ZM114.176 323.636C44.309 304.452 8.19 284.645 17.406 234.905C23.434 202.311 53.227 181.505 98.869 176.589C102.651 177.659 106.367 178.69 109.926 179.669L125.861 183.948C189.541 200.975 249.692 217.065 238.567 277.085C232.535 309.747 202.024 330.399 156.518 335.221C147.672 332.663 138.754 330.261 129.986 327.917L114.176 323.636Z" />
        </Icon>
    </>
}