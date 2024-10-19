
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `biohazard` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/biohazard?s=solid biohazard}
 * @preview ![biohazard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuNDkxIDI4My40ODRDNTYyLjM2NCAyNDQuMzcxIDUzNS45ODcgMjExLjUwNCA1MDEuMzU5IDE5MS4xMzVDNDgzLjg1OSAxODAuNzYyIDQ2NS4xMDcgMTc0LjUxNCA0NDYuMTA1IDE3MS4yNjZDNDUyLjEwNSAxNTMuNTIgNDU2LjEwNSAxMzQuNzc1IDQ1Ni4xMDUgMTE1LjAyOUM0NTYuMTA1IDc0LjA0MSA0NDEuNjA1IDM0LjMwMyA0MTUuMTAxIDIuODExQzQxMi42MDEgLTAuMTg5IDQwOC40NzYgLTAuODEyIDQwNS4xMDEgMS4wNjFDNDAxLjg1MSAyLjkzNiA0MDAuMzUxIDcuMDU5IDQwMS40NzYgMTAuODA5QzQwNS45NzYgMjQuNTU1IDQwOC4xMDEgMzcuMDUxIDQwOC4xMDEgNDkuMjk5QzQwOC4xMDEgMTE3LjAyOSAzNTQuMzQ1IDE3Mi4xNDEgMjg4LjA4OSAxNzIuMTQxUzE2OC4wNzkgMTE3LjAyOSAxNjguMDc5IDQ5LjI5OUMxNjguMDc5IDM3LjE3NiAxNzAuMzI5IDI0LjU1NSAxNzQuNzA0IDEwLjgwOUMxNzUuODI5IDcuMDU5IDE3NC4zMjkgMi45MzYgMTcxLjA3OSAxLjA2MUMxNjcuNzA0IC0wLjgxMiAxNjMuNTc3IC0wLjE4OSAxNjEuMDc3IDIuODExQzEzNC43IDM0LjMwMyAxMjAuMDczIDc0LjA0MSAxMjAuMDczIDExNS4wMjlDMTIwLjA3MyAxMzQuNzc1IDEyMy45NDggMTUzLjUyIDEzMC4wNzUgMTcxLjI2NkMxMTEuMTk4IDE3NC41MTQgOTIuMzIxIDE4MC43NjIgNzQuODIgMTkxLjEzNUM0MC4xOTMgMjExLjYyOSAxMy44MTQgMjQ0LjM3MSAwLjQzOSAyODMuNDg0Qy0wLjgxMSAyODcuMjM0IDAuNjg5IDI5MS4yMzIgMy45MzkgMjkzLjIzMkM3LjMxNCAyOTUuMjMyIDExLjQzOSAyOTQuNjA3IDEzLjkzOSAyOTEuNzMyQzIzLjMxNiAyODAuODYxIDMyLjk0MSAyNzIuNjEzIDQzLjE5MyAyNjYuNjE1QzEwMC40NDYgMjMyLjc0OCAxNzMuOTU0IDI1Mi44NjcgMjA3LjA4MSAzMTEuNjAyQzI0MC4yMSAzNzAuMjExIDIyMC40NTggNDQ1LjU2NiAxNjMuMjAyIDQ3OS40MzJDMTUyLjk1MiA0ODUuNTU1IDE0MS4yIDQ4OS44MDUgMTI3LjMyNSA0OTIuODAzQzEyMy42OTggNDkzLjY3OCAxMjAuOTQ4IDQ5Ny4wNTMgMTIwLjk0OCA1MDAuOTI2QzEyMS4wNzMgNTA0LjkyNiAxMjMuNjk4IDUwOC4xNzQgMTI3LjQ1IDUwOC45MjRDMTY3LjIwNCA1MTYuNjcyIDIwOC4wODEgNTA5LjY3NCAyNDIuNzEgNDg5LjE4QzI2MC43MTIgNDc4LjY4MiAyNzUuNTg5IDQ2NC42ODYgMjg3Ljk2NCA0NDkuMTg5QzMwMC4zNDEgNDY0LjY4NiAzMTUuMzQzIDQ3OC42ODIgMzMzLjM0MyA0ODkuMThDMzY3Ljg0NyA1MDkuNjc0IDQwOC44NTEgNTE2LjY3MiA0NDguNDggNTA4LjkyNEM0NTIuMzU1IDUwOC4xNzQgNDU0Ljg1NSA1MDQuOTI2IDQ1NC45OCA1MDAuOTI2QzQ1NC45OCA0OTcuMDUzIDQ1Mi4zNTUgNDkzLjY3OCA0NDguNjA1IDQ5Mi44MDNDNDM0LjcyOCA0ODkuOTMgNDIyLjk3OCA0ODUuNTU1IDQxMi44NTEgNDc5LjQzMkMzNTUuNDcyIDQ0NS41NjYgMzM1Ljg0NSAzNzAuMjExIDM2OC44NDcgMzExLjYwMkM0MDEuOTc2IDI1Mi44NjcgNDc1LjQ4MiAyMzIuNzQ4IDUzMi44NjIgMjY2LjYxNUM1NDIuOTg3IDI3Mi43MzggNTUyLjYxNCAyODAuODYxIDU2MS45ODkgMjkxLjczMkM1NjQuNDg5IDI5NC42MDcgNTY4Ljc0MSAyOTUuMjMyIDU3MS45OTEgMjkzLjIzMkM1NzUuMzY2IDI5MS4yMzIgNTc2Ljg2NiAyODcuMjM0IDU3NS40OTEgMjgzLjQ4NFpNMjg3Ljk2NCAzMjAuMUMyNjEuNDYyIDMyMC4xIDIzOS45NiAyOTguNjA1IDIzOS45NiAyNzIuMTEzQzIzOS45NiAyNDUuNjE5IDI2MS40NjIgMjI0LjEyNSAyODcuOTY0IDIyNC4xMjVDMzE0LjQ2OCAyMjQuMTI1IDMzNS45NyAyNDUuNjE5IDMzNS45NyAyNzIuMTEzQzMzNS45NyAyOTguNjA1IDMxNC40NjggMzIwLjEgMjg3Ljk2NCAzMjAuMVpNMzg1LjAxNyAzNzcuNTY2QzM4Ni4xNjkgNDAwLjM0IDM5NS43IDQyMi4xNTYgNDEyLjE4MSA0MzguNDQxQzQ1OS42MzQgNDAzLjAwNiA0OTEuMzU3IDM0Ny45MTQgNDk1LjMyOSAyODUuMTM5QzQ3Mi43NTIgMjc4Ljk2NSA0NDkuNjU0IDI4Mi4zODUgNDI5Ljc3MSAyOTMuODg5QzQyNC42NTIgMzI2Ljg1MiA0MDguNTM2IDM1NS45NjUgMzg1LjAxNyAzNzcuNTY2Wk0yNTMuMjggMTMyLjU3OEMyNzkuNTA0IDEyNi4wMjcgMjk4LjY1IDEyNi41NTQgMzIyLjgwMiAxMzIuNjA0QzM0NC43MyAxMjIuODI2IDM2MS44MzUgMTA0LjAyMyAzNzAuMjQ3IDgwLjgyOEMzNDUuMDEzIDY5Ljk0OSAzMTcuMjI2IDYzLjg2MyAyODcuOTk5IDYzLjg2M0MyNTguODE4IDYzLjg2MyAyMzEuMDcgNjkuOTI0IDIwNS44NjQgODAuNzczQzIxNC4yNjUgMTAzLjk3NyAyMzEuMzU5IDEyMi43ODcgMjUzLjI4IDEzMi41NzhaTTE2My44NTMgNDM4LjQ2N0MxODAuMzE2IDQyMi4yMTEgMTg5LjgyOSA0MDAuMzU0IDE5MC45NDUgMzc3LjUzNUMxNjcuNDU2IDM1NS45NDkgMTUxLjM1NSAzMjYuODYzIDE0Ni4yMzIgMjkzLjkzOUMxMjYuODc3IDI4Mi42OTMgMTAzLjc1NiAyNzguODE1IDgwLjY2OSAyODUuMTM5Qzg0LjY0NCAzNDcuOTI4IDExNi4zODIgNDAzLjAzMyAxNjMuODUzIDQzOC40NjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Biohazard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.491 283.484C562.364 244.371 535.987 211.504 501.359 191.135C483.859 180.762 465.107 174.514 446.105 171.266C452.105 153.52 456.105 134.775 456.105 115.029C456.105 74.041 441.605 34.303 415.101 2.811C412.601 -0.189 408.476 -0.812 405.101 1.061C401.851 2.936 400.351 7.059 401.476 10.809C405.976 24.555 408.101 37.051 408.101 49.299C408.101 117.029 354.345 172.141 288.089 172.141S168.079 117.029 168.079 49.299C168.079 37.176 170.329 24.555 174.704 10.809C175.829 7.059 174.329 2.936 171.079 1.061C167.704 -0.812 163.577 -0.189 161.077 2.811C134.7 34.303 120.073 74.041 120.073 115.029C120.073 134.775 123.948 153.52 130.075 171.266C111.198 174.514 92.321 180.762 74.82 191.135C40.193 211.629 13.814 244.371 0.439 283.484C-0.811 287.234 0.689 291.232 3.939 293.232C7.314 295.232 11.439 294.607 13.939 291.732C23.316 280.861 32.941 272.613 43.193 266.615C100.446 232.748 173.954 252.867 207.081 311.602C240.21 370.211 220.458 445.566 163.202 479.432C152.952 485.555 141.2 489.805 127.325 492.803C123.698 493.678 120.948 497.053 120.948 500.926C121.073 504.926 123.698 508.174 127.45 508.924C167.204 516.672 208.081 509.674 242.71 489.18C260.712 478.682 275.589 464.686 287.964 449.189C300.341 464.686 315.343 478.682 333.343 489.18C367.847 509.674 408.851 516.672 448.48 508.924C452.355 508.174 454.855 504.926 454.98 500.926C454.98 497.053 452.355 493.678 448.605 492.803C434.728 489.93 422.978 485.555 412.851 479.432C355.472 445.566 335.845 370.211 368.847 311.602C401.976 252.867 475.482 232.748 532.862 266.615C542.987 272.738 552.614 280.861 561.989 291.732C564.489 294.607 568.741 295.232 571.991 293.232C575.366 291.232 576.866 287.234 575.491 283.484ZM287.964 320.1C261.462 320.1 239.96 298.605 239.96 272.113C239.96 245.619 261.462 224.125 287.964 224.125C314.468 224.125 335.97 245.619 335.97 272.113C335.97 298.605 314.468 320.1 287.964 320.1ZM385.017 377.566C386.169 400.34 395.7 422.156 412.181 438.441C459.634 403.006 491.357 347.914 495.329 285.139C472.752 278.965 449.654 282.385 429.771 293.889C424.652 326.852 408.536 355.965 385.017 377.566ZM253.28 132.578C279.504 126.027 298.65 126.554 322.802 132.604C344.73 122.826 361.835 104.023 370.247 80.828C345.013 69.949 317.226 63.863 287.999 63.863C258.818 63.863 231.07 69.924 205.864 80.773C214.265 103.977 231.359 122.787 253.28 132.578ZM163.853 438.467C180.316 422.211 189.829 400.354 190.945 377.535C167.456 355.949 151.355 326.863 146.232 293.939C126.877 282.693 103.756 278.815 80.669 285.139C84.644 347.928 116.382 403.033 163.853 438.467Z" />
        </Icon>
    </>
}