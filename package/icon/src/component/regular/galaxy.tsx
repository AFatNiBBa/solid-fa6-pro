
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `galaxy` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=regular galaxy}
 * @preview ![galaxy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuNDg2IDI2Ni44NjRINTA2LjM2MUM0ODkuMTExIDE5My43MzkgNDI4LjExMSAxMzQuNzM5IDM1NC42MTEgMTIwLjExNEMzMzQuNjExIDExNS45ODkgMzEzLjk4NiAxMTQuOTg5IDI5My43MzYgMTE3LjExNEMzMDUuMjM2IDk2LjYxNCAzMjIuOTg2IDgwLjYxNCAzNDQuNDg2IDcxLjIzOUMzNjAuMTExIDY0Ljg2NCAzNjkuMTExIDQ4LjYxNCAzNjYuMzYxIDMxLjk4OUMzNjMuOTg2IDE1LjM2NCAzNTAuNDg2IDIuNDg5IDMzMy43MzYgMC45ODlDMzExLjM2MSAtMS4yNjEgMjg4LjczNiAwLjM2NCAyNjYuODYxIDUuNDg5QzE5My43MzYgMjIuODY0IDEzNC43MzYgODMuODY0IDEyMC4xMTEgMTU3LjM2NEMxMTUuOTg2IDE3Ny40ODkgMTE1LjExMSAxOTcuOTg5IDExNy4yMzYgMjE4LjIzOUM5Ni43MzYgMjA2Ljg2NCA4MC42MTEgMTg4Ljk4OSA3MS4yMzYgMTY3LjQ4OUM2NC43MzYgMTUxLjk4OSA0OC40ODYgMTQyLjk4OSAzMS45ODYgMTQ1LjYxNEMxNS4zNjEgMTQ3Ljk4OSAyLjQ4NiAxNjEuNDg5IDAuOTg2IDE3OC4yMzlDLTEuMjY0IDIwMC42MTQgMC4zNjEgMjIzLjIzOSA1LjYxMSAyNDUuMTE0QzIyLjg2MSAzMTguMjM5IDgzLjg2MSAzNzcuMjM5IDE1Ny4zNjEgMzkxLjk4OUMxNzcuMzYxIDM5NS45ODkgMTk3Ljg2MSAzOTYuOTg5IDIxOC4yMzYgMzk0Ljg2NEMyMDYuNzM2IDQxNS4zNjQgMTg4Ljk4NiA0MzEuMzY0IDE2Ny40ODYgNDQwLjczOUMxNTEuOTg2IDQ0Ny4yMzkgMTQzLjExMSA0NjMuNDg5IDE0NS42MTEgNDc5Ljk4OUMxNDguMTExIDQ5Ni42MTQgMTYxLjQ4NiA1MDkuMzY0IDE3OC4yMzYgNTEwLjk4OUMxODQuNzM2IDUxMS42MTQgMTkxLjM2MSA1MTEuOTg5IDE5Ny45ODYgNTExLjk4OUMyMTMuODYxIDUxMS45ODkgMjI5LjYxMSA1MTAuMTE0IDI0NS4xMTEgNTA2LjQ4OUMzMTguMjM2IDQ4OS4xMTQgMzc3LjIzNiA0MjguMTE0IDM5MS44NjEgMzU0LjYxNEMzOTUuOTg2IDMzNC40ODkgMzk2Ljg2MSAzMTMuOTg5IDM5NC43MzYgMjkzLjczOUM0MTUuMjM2IDMwNS4xMTQgNDMxLjM2MSAzMjIuOTg5IDQ0MC43MzYgMzQ0LjQ4OUM0NDcuMjM2IDM1OS44NjQgNDYzLjQ4NiAzNjguODY0IDQ3OS45ODYgMzY2LjM2NEM0OTYuNjExIDM2My44NjQgNTA5LjIzNiAzNTAuNDg5IDUxMC45ODYgMzMzLjg2NEM1MTMuMjM2IDMxMS4zNjQgNTExLjczNiAyODguNzM5IDUwNi40ODYgMjY2Ljg2NFpNMzY1Ljk4NiAyMzMuODY0QzM1Ny42MTEgMjMyLjYxNCAzNDkuMzYxIDIzNS44NjQgMzQzLjk4NiAyNDIuMjM5QzMzOC42MTEgMjQ4LjczOSAzMzYuOTg2IDI1Ny40ODkgMzM5LjczNiAyNjUuMzY0QzM0OC40ODYgMjkxLjExNCAzNTAuMzYxIDMxOC42MTQgMzQ0Ljg2MSAzNDUuMTE0QzMzMy40ODYgNDAxLjg2NCAyODYuNjExIDQ1MS4xMTQgMjIzLjg2MSA0NjEuNzM5QzI1My4xMTEgNDM3LjQ4OSAyNzIuMzYxIDQwMy40ODkgMjc4LjExMSAzNjUuOTg5QzI3OS4zNjEgMzU3LjczOSAyNzYuMTExIDM0OS4zNjQgMjY5LjczNiAzNDMuOTg5QzI2My4yMzYgMzM4LjYxNCAyNTQuNDg2IDMzNi45ODkgMjQ2LjYxMSAzMzkuNzM5QzIyMC44NjEgMzQ4LjQ4OSAxOTMuMzYxIDM1MC4yMzkgMTY2Ljg2MSAzNDQuODY0QzEwOS44NjEgMzMzLjQ4OSA2MC42MTEgMjg2LjExNCA1MC4yMzYgMjIzLjk4OUM3NC40ODYgMjUzLjExNCAxMDguNDg2IDI3Mi4zNjQgMTQ1Ljk4NiAyNzguMTE0QzE1NC4zNjEgMjc5LjM2NCAxNjIuNjExIDI3Ni4xMTQgMTY3Ljk4NiAyNjkuNzM5QzE3My4zNjEgMjYzLjIzOSAxNzQuOTg2IDI1NC40ODkgMTcyLjIzNiAyNDYuNjE0QzE2My40ODYgMjIwLjk4OSAxNjEuNjExIDE5My4zNjQgMTY3LjExMSAxNjYuODY0QzE3OC40ODYgMTEwLjExNCAyMjUuMzYxIDYwLjg2NCAyODguMTExIDUwLjIzOUMyNTguODYxIDc0LjQ4OSAyMzkuNjExIDEwOC40ODkgMjMzLjg2MSAxNDUuOTg5QzIzMi42MTEgMTU0LjM2NCAyMzUuODYxIDE2Mi42MTQgMjQyLjIzNiAxNjcuOTg5QzI0OC43MzYgMTczLjM2NCAyNTcuNDg2IDE3NC45ODkgMjY1LjM2MSAxNzIuMjM5QzI5MC45ODYgMTYzLjQ4OSAzMTguNjExIDE2MS42MTQgMzQ1LjExMSAxNjcuMTE0QzQwMS45ODYgMTc4LjQ4OSA0NTEuMzYxIDIyNS43MzkgNDYxLjczNiAyODguMTE0QzQzNy40ODYgMjU4Ljg2NCA0MDMuNDg2IDIzOS42MTQgMzY1Ljk4NiAyMzMuODY0Wk0yNTUuOTg2IDIxNS45ODlDMjMzLjg2MSAyMTUuOTg5IDIxNS45ODYgMjMzLjg2NCAyMTUuOTg2IDI1NS45ODlDMjE1Ljk4NiAyNzguMTE0IDIzMy44NjEgMjk1Ljk4OSAyNTUuOTg2IDI5NS45ODlTMjk1Ljk4NiAyNzguMTE0IDI5NS45ODYgMjU1Ljk4OUMyOTUuOTg2IDIzMy44NjQgMjc4LjExMSAyMTUuOTg5IDI1NS45ODYgMjE1Ljk4OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Galaxy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.486 266.864H506.361C489.111 193.739 428.111 134.739 354.611 120.114C334.611 115.989 313.986 114.989 293.736 117.114C305.236 96.614 322.986 80.614 344.486 71.239C360.111 64.864 369.111 48.614 366.361 31.989C363.986 15.364 350.486 2.489 333.736 0.989C311.361 -1.261 288.736 0.364 266.861 5.489C193.736 22.864 134.736 83.864 120.111 157.364C115.986 177.489 115.111 197.989 117.236 218.239C96.736 206.864 80.611 188.989 71.236 167.489C64.736 151.989 48.486 142.989 31.986 145.614C15.361 147.989 2.486 161.489 0.986 178.239C-1.264 200.614 0.361 223.239 5.611 245.114C22.861 318.239 83.861 377.239 157.361 391.989C177.361 395.989 197.861 396.989 218.236 394.864C206.736 415.364 188.986 431.364 167.486 440.739C151.986 447.239 143.111 463.489 145.611 479.989C148.111 496.614 161.486 509.364 178.236 510.989C184.736 511.614 191.361 511.989 197.986 511.989C213.861 511.989 229.611 510.114 245.111 506.489C318.236 489.114 377.236 428.114 391.861 354.614C395.986 334.489 396.861 313.989 394.736 293.739C415.236 305.114 431.361 322.989 440.736 344.489C447.236 359.864 463.486 368.864 479.986 366.364C496.611 363.864 509.236 350.489 510.986 333.864C513.236 311.364 511.736 288.739 506.486 266.864ZM365.986 233.864C357.611 232.614 349.361 235.864 343.986 242.239C338.611 248.739 336.986 257.489 339.736 265.364C348.486 291.114 350.361 318.614 344.861 345.114C333.486 401.864 286.611 451.114 223.861 461.739C253.111 437.489 272.361 403.489 278.111 365.989C279.361 357.739 276.111 349.364 269.736 343.989C263.236 338.614 254.486 336.989 246.611 339.739C220.861 348.489 193.361 350.239 166.861 344.864C109.861 333.489 60.611 286.114 50.236 223.989C74.486 253.114 108.486 272.364 145.986 278.114C154.361 279.364 162.611 276.114 167.986 269.739C173.361 263.239 174.986 254.489 172.236 246.614C163.486 220.989 161.611 193.364 167.111 166.864C178.486 110.114 225.361 60.864 288.111 50.239C258.861 74.489 239.611 108.489 233.861 145.989C232.611 154.364 235.861 162.614 242.236 167.989C248.736 173.364 257.486 174.989 265.361 172.239C290.986 163.489 318.611 161.614 345.111 167.114C401.986 178.489 451.361 225.739 461.736 288.114C437.486 258.864 403.486 239.614 365.986 233.864ZM255.986 215.989C233.861 215.989 215.986 233.864 215.986 255.989C215.986 278.114 233.861 295.989 255.986 295.989S295.986 278.114 295.986 255.989C295.986 233.864 278.111 215.989 255.986 215.989Z" />
        </Icon>
    </>
}