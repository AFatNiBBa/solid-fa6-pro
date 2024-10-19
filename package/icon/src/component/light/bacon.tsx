
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bacon` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bacon?s=light bacon}
 * @preview ![bacon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjQuNzIxIDk5LjY3OEw0ODYuODkzIDEyLjg3N0M0NzkuMzU0IDQuNDU5IDQ2OS4wMTIgMCA0NTguNTQ3IDBDNDUzLjM1NCAwIDQ0OC4xMjcgMS4xIDQ0My4yMDMgMy4zNTlMMzUwLjQ1MyA0Ni4zNTRDMjk5LjMyOCA3MC4wNDcgMjU3LjExIDExMC4zODMgMjI4LjM0NCAxNjIuOTczTDIwNy42ODggMjAwLjczQzE4MC41NzggMjUwLjI4NyAxNDAuODkxIDI4OC4yMzIgOTIuOTM2IDMxMC40ODhMMjQuMDYxIDM0Mi40MzJDMTIuMjAxIDM0Ny45MTggMy43OCAzNTguOTUxIDAuOTY3IDM3Mi42NThDLTEuOTcgMzg3LjAwNCAxLjg3MyA0MDEuODM2IDExLjI4IDQxMi4zMDdMODkuMTA4IDQ5OS4xMDVDOTYuNjM5IDUwNy41MTQgMTA2Ljk5OCA1MTIgMTE3LjQ2OSA1MTJDMTIyLjY1NyA1MTIgMTI3Ljg3NSA1MTAuODkxIDEzMi43OTcgNTA4LjYyNUwyMjUuNTQ3IDQ2NS42MzFDMjc2LjY3MiA0NDEuOTM3IDMxOC44OTEgNDAxLjYwMiAzNDcuNjU3IDM0OS4wMTJMMzY4LjMxMyAzMTEuMjU0QzM5NS40MjIgMjYxLjY5NyA0MzUuMTEgMjIzLjc1IDQ4My4wNjUgMjAxLjQ5Nkw1NTEuOTQgMTY5LjU1MUM1NjMuNzk5IDE2NC4wNjYgNTcyLjIyMSAxNTMuMDMzIDU3NS4wMzQgMTM5LjMyNkM1NzcuOTcxIDEyNC45OCA1NzQuMTI3IDExMC4xNDggNTY0LjcyMSA5OS42NzhaTTM1LjA4NCAzOTAuOTIyQzI5LjkzNiAzODUuMTg2IDMxLjU3OCAzNzQuMjExIDM3LjUyNiAzNzEuNDYzTDEwNi40MDcgMzM5LjUxNEMxNjAuNjI3IDMxNC4zNTIgMjA1LjM1NiAyNzEuNjcyIDIzNS43NjIgMjE2LjA4OEwyNTYuNDE4IDE3OC4zMjhDMjgxLjg4NSAxMzEuNzcgMzE5LjA1NSA5Ni4xNzQgMzYzLjkxMiA3NS4zODdMNDU2LjU1NSAzMi40NDFDNDU2LjcyNyAzMi4zNjMgNDU5Ljk0MiAzMC43NSA0NjMuMDY5IDM0LjI0TDQ5My40NTUgNjguMTMxTDQwOC4yNDggMTA3LjY0MUMzNTUuNTkyIDEzMi4wNDcgMzEyLjEyMyAxNzMuNTQ3IDI4Mi41NDUgMjI3LjYwOUwyNjEuODg5IDI2NS4zNzVDMjM1LjYwOCAzMTMuNDIyIDE5Ny4xODYgMzUwLjE4OCAxNTAuNzMzIDM3MS43MDNMNTYuODU2IDQxNS4yMDNMMzUuMDg0IDM5MC45MjJaTTUzOC40NzcgMTQwLjUyMUw0NjkuNTk0IDE3Mi40NjlDNDE1LjM3NSAxOTcuNjMxIDM3MC42NDcgMjQwLjMxMyAzNDAuMjQxIDI5NS44OTZMMzE5LjU4MiAzMzMuNjU2QzI5NC4xMTYgMzgwLjIxNSAyNTYuOTQ2IDQxNS44MTEgMjEyLjA5IDQzNi41OThMMTE5LjQxNCA0NzkuNTU3QzExNi44NDIgNDgwLjc0NCAxMTQuMzY0IDQ3OS4zNCAxMTIuOTM0IDQ3Ny43NDRMNzkuMTk4IDQ0MC4xMjFMMTY0LjE4NiA0MDAuNzM0QzIxNi44ODkgMzc2LjMxMiAyNjAuMzczIDMzNC44MTIgMjg5Ljk1MSAyODAuNzM0TDMxMC42MDggMjQyLjk4NEMzMzYuODg5IDE5NC45NTMgMzc1LjMxMSAxNTguMTg4IDQyMS43MTcgMTM2LjY3Mkw1MTUuNzk3IDkzLjA0N0w1NDAuOTE2IDEyMS4wNjNDNTQ2LjA3NSAxMjYuODAzIDU0NC40MTggMTM3Ljc3MSA1MzguNDc3IDE0MC41MjFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bacon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M564.721 99.678L486.893 12.877C479.354 4.459 469.012 0 458.547 0C453.354 0 448.127 1.1 443.203 3.359L350.453 46.354C299.328 70.047 257.11 110.383 228.344 162.973L207.688 200.73C180.578 250.287 140.891 288.232 92.936 310.488L24.061 342.432C12.201 347.918 3.78 358.951 0.967 372.658C-1.97 387.004 1.873 401.836 11.28 412.307L89.108 499.105C96.639 507.514 106.998 512 117.469 512C122.657 512 127.875 510.891 132.797 508.625L225.547 465.631C276.672 441.937 318.891 401.602 347.657 349.012L368.313 311.254C395.422 261.697 435.11 223.75 483.065 201.496L551.94 169.551C563.799 164.066 572.221 153.033 575.034 139.326C577.971 124.98 574.127 110.148 564.721 99.678ZM35.084 390.922C29.936 385.186 31.578 374.211 37.526 371.463L106.407 339.514C160.627 314.352 205.356 271.672 235.762 216.088L256.418 178.328C281.885 131.77 319.055 96.174 363.912 75.387L456.555 32.441C456.727 32.363 459.942 30.75 463.069 34.24L493.455 68.131L408.248 107.641C355.592 132.047 312.123 173.547 282.545 227.609L261.889 265.375C235.608 313.422 197.186 350.188 150.733 371.703L56.856 415.203L35.084 390.922ZM538.477 140.521L469.594 172.469C415.375 197.631 370.647 240.313 340.241 295.896L319.582 333.656C294.116 380.215 256.946 415.811 212.09 436.598L119.414 479.557C116.842 480.744 114.364 479.34 112.934 477.744L79.198 440.121L164.186 400.734C216.889 376.312 260.373 334.812 289.951 280.734L310.608 242.984C336.889 194.953 375.311 158.188 421.717 136.672L515.797 93.047L540.916 121.063C546.075 126.803 544.418 137.771 538.477 140.521Z" />
        </Icon>
    </>
}