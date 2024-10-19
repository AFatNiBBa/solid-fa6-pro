
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `water-arrow-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water-arrow-down?s=thin water-arrow-down}
 * @preview ![water-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODIuMzM4IDI1My42NTZDMjg1LjQ2MyAyNTYuNzgxIDI5MC41MjUgMjU2Ljc4MSAyOTMuNjUgMjUzLjY1Nkw0MTMuNjUzIDEzMy42NTZDNDE1LjIxNiAxMzIuMDk0IDQxNS45OTcgMTMwLjA2MiA0MTUuOTk3IDEyOFM0MTUuMjE2IDEyMy45MDYgNDEzLjY1MyAxMjIuMzQ0QzQxMC41MjggMTE5LjIxOSA0MDUuNDY1IDExOS4yMTkgNDAyLjM0IDEyMi4zNDRMMjk1Ljk5NCAyMjguNjg4VjhDMjk1Ljk5NCAzLjU5NCAyOTIuNDE2IDAgMjg3Ljk5NCAwQzI4My41NzIgMCAyNzkuOTk0IDMuNTk0IDI3OS45OTQgOFYyMjguNjg4TDE3My42NDggMTIyLjM0NEMxNzAuNTIzIDExOS4yMTkgMTY1LjQ2IDExOS4yMTkgMTYyLjMzNSAxMjIuMzQ0QzE1OS4yMSAxMjUuNDY5IDE1OS4yMSAxMzAuNTMxIDE2Mi4zMzUgMTMzLjY1NkwyODIuMzM4IDI1My42NTZaTTU2OC42MzEgNDk1LjY0MUM1MzkuMzQ5IDQ5My4zNTIgNTEwLjc1NSA0NzcuNzgxIDQ4NS45MTEgNDUwLjYwMkM0ODQuMzc5IDQ0OC45NDEgNDgyLjI1NCA0NDggNDgwLjAwNCA0NDhINDc5Ljk3M0M0NzcuNzIzIDQ0OCA0NzUuNTk4IDQ0OC45NTcgNDc0LjA2NyA0NTAuNjMzQzQ0Ny40MSA0ODAuMTY0IDQxNi40NCA0OTUuODI4IDM4NC41NjUgNDk1Ljk0MUgzODQuMjIxQzM1Mi4yODMgNDk1Ljk0MSAzMjEuMDMyIDQ4MC4yNTggMjkzLjkwNiA0NTAuNjAyQzI5Mi4zNzUgNDQ4Ljk0MSAyOTAuMjUgNDQ4IDI4OCA0NDhIMjg3Ljk2OUMyODUuNzE5IDQ0OCAyODMuNTk0IDQ0OC45NTcgMjgyLjA2MiA0NTAuNjMzQzI1NS40MDUgNDgwLjE2NCAyMjQuNDM2IDQ5NS44MjggMTkyLjU2IDQ5NS45NDFIMTkyLjIxNkMxNjAuMjc4IDQ5NS45NDEgMTI5LjAyNyA0ODAuMjU4IDEwMS45MDIgNDUwLjYwMkMxMDAuMzcxIDQ0OC45NDEgOTguMjQ2IDQ0OCA5NS45OTUgNDQ4SDk1Ljk2NEM5My43MTQgNDQ4IDkxLjU4OSA0NDguOTU3IDkwLjA1OCA0NTAuNjMzQzY1LjQwMSA0NzcuOTIyIDM2LjgwNyA0OTMuNTA4IDcuNCA0OTUuNjcyQzIuOTkzIDQ5Ni4wMDQgLTAuMzE5IDQ5OS44NTkgMC4wMjUgNTA0LjI4MUMwLjM2OCA1MDguNjkxIDMuMzY4IDUxMS44MjggOC41ODcgNTExLjcwM0MzOS44MDcgNTA5LjM4MyA2OS44NyA0OTQuMjE1IDk2LjAyNyA0NjcuNjY0QzEyNC45MzQgNDk2LjcxMSAxNTguMDI4IDUxMiAxOTIuMjE2IDUxMkgxOTIuNTkxQzIyNi43MTcgNTExLjg5MSAyNTkuNTYyIDQ5Ni42MDIgMjg4LjAzMSA0NjcuNjhDMzE2LjkzOCA0OTYuNzExIDM1MC4wMzMgNTEyIDM4NC4yMjEgNTEySDM4NC41OTZDNDE4LjcyMiA1MTEuODkxIDQ1MS41NjYgNDk2LjYwMiA0ODAuMDM2IDQ2Ny42OEM1MDYuMzE3IDQ5NC4wNzQgNTM2LjM0OSA1MDkuMjI3IDU2Ny4zODEgNTExLjY0MUM1NzIuNTM4IDUxMi4yODEgNTc1LjYzMiA1MDguNjU2IDU3NS45NzUgNTA0LjI2NkM1NzYuMzE5IDQ5OS44NDQgNTczLjAzOCA0OTUuOTczIDU2OC42MzEgNDk1LjY0MVpNOC41ODcgMzgzLjcwM0MzOS44MDcgMzgxLjM4MyA2OS44NyAzNjYuMjE1IDk2LjAyNyAzMzkuNjY0QzEyNC45MzQgMzY4LjcxMSAxNTguMDI4IDM4NCAxOTIuMjE2IDM4NEgxOTIuNTkxQzIyNi43MTcgMzgzLjg5MSAyNTkuNTYyIDM2OC42MDIgMjg4LjAzMSAzMzkuNjhDMzE2LjkzOCAzNjguNzExIDM1MC4wMzMgMzg0IDM4NC4yMjEgMzg0SDM4NC41OTZDNDE4LjcyMiAzODMuODkxIDQ1MS41NjYgMzY4LjYwMiA0ODAuMDM2IDMzOS42OEM1MDYuMzE3IDM2Ni4wNzQgNTM2LjM0OSAzODEuMjI3IDU2Ny4zODEgMzgzLjY0MUM1NzIuNTM4IDM4NC4yODEgNTc1LjYzMiAzODAuNjU2IDU3NS45NzUgMzc2LjI2NkM1NzYuMzE5IDM3MS44NDQgNTczLjAzOCAzNjcuOTczIDU2OC42MzEgMzY3LjY0MUM1MzkuMzQ5IDM2NS4zNTIgNTEwLjc1NSAzNDkuNzgxIDQ4NS45MTEgMzIyLjYwMkM0ODQuMzc5IDMyMC45NDEgNDgyLjI1NCAzMjAgNDgwLjAwNCAzMjBINDc5Ljk3M0M0NzcuNzIzIDMyMCA0NzUuNTk4IDMyMC45NTcgNDc0LjA2NyAzMjIuNjMzQzQ0Ny40MSAzNTIuMTY0IDQxNi40NCAzNjcuODI4IDM4NC41NjUgMzY3Ljk0MUgzODQuMjIxQzM1Mi4yODMgMzY3Ljk0MSAzMjEuMDMyIDM1Mi4yNTggMjkzLjkwNiAzMjIuNjAyQzI5Mi4zNzUgMzIwLjk0MSAyOTAuMjUgMzIwIDI4OCAzMjBIMjg3Ljk2OUMyODUuNzE5IDMyMCAyODMuNTk0IDMyMC45NTcgMjgyLjA2MiAzMjIuNjMzQzI1NS40MDUgMzUyLjE2NCAyMjQuNDM2IDM2Ny44MjggMTkyLjU2IDM2Ny45NDFIMTkyLjIxNkMxNjAuMjc4IDM2Ny45NDEgMTI5LjAyNyAzNTIuMjU4IDEwMS45MDIgMzIyLjYwMkMxMDAuMzcxIDMyMC45NDEgOTguMjQ2IDMyMCA5NS45OTUgMzIwSDk1Ljk2NEM5My43MTQgMzIwIDkxLjU4OSAzMjAuOTU3IDkwLjA1OCAzMjIuNjMzQzY1LjQwMSAzNDkuOTIyIDM2LjgwNyAzNjUuNTA4IDcuNCAzNjcuNjcyQzIuOTkzIDM2OC4wMDQgLTAuMzE5IDM3MS44NTkgMC4wMjUgMzc2LjI4MUMwLjM2OCAzODAuNjkxIDMuMzY4IDM4My44MjggOC41ODcgMzgzLjcwM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WaterArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M282.338 253.656C285.463 256.781 290.525 256.781 293.65 253.656L413.653 133.656C415.216 132.094 415.997 130.062 415.997 128S415.216 123.906 413.653 122.344C410.528 119.219 405.465 119.219 402.34 122.344L295.994 228.688V8C295.994 3.594 292.416 0 287.994 0C283.572 0 279.994 3.594 279.994 8V228.688L173.648 122.344C170.523 119.219 165.46 119.219 162.335 122.344C159.21 125.469 159.21 130.531 162.335 133.656L282.338 253.656ZM568.631 495.641C539.349 493.352 510.755 477.781 485.911 450.602C484.379 448.941 482.254 448 480.004 448H479.973C477.723 448 475.598 448.957 474.067 450.633C447.41 480.164 416.44 495.828 384.565 495.941H384.221C352.283 495.941 321.032 480.258 293.906 450.602C292.375 448.941 290.25 448 288 448H287.969C285.719 448 283.594 448.957 282.062 450.633C255.405 480.164 224.436 495.828 192.56 495.941H192.216C160.278 495.941 129.027 480.258 101.902 450.602C100.371 448.941 98.246 448 95.995 448H95.964C93.714 448 91.589 448.957 90.058 450.633C65.401 477.922 36.807 493.508 7.4 495.672C2.993 496.004 -0.319 499.859 0.025 504.281C0.368 508.691 3.368 511.828 8.587 511.703C39.807 509.383 69.87 494.215 96.027 467.664C124.934 496.711 158.028 512 192.216 512H192.591C226.717 511.891 259.562 496.602 288.031 467.68C316.938 496.711 350.033 512 384.221 512H384.596C418.722 511.891 451.566 496.602 480.036 467.68C506.317 494.074 536.349 509.227 567.381 511.641C572.538 512.281 575.632 508.656 575.975 504.266C576.319 499.844 573.038 495.973 568.631 495.641ZM8.587 383.703C39.807 381.383 69.87 366.215 96.027 339.664C124.934 368.711 158.028 384 192.216 384H192.591C226.717 383.891 259.562 368.602 288.031 339.68C316.938 368.711 350.033 384 384.221 384H384.596C418.722 383.891 451.566 368.602 480.036 339.68C506.317 366.074 536.349 381.227 567.381 383.641C572.538 384.281 575.632 380.656 575.975 376.266C576.319 371.844 573.038 367.973 568.631 367.641C539.349 365.352 510.755 349.781 485.911 322.602C484.379 320.941 482.254 320 480.004 320H479.973C477.723 320 475.598 320.957 474.067 322.633C447.41 352.164 416.44 367.828 384.565 367.941H384.221C352.283 367.941 321.032 352.258 293.906 322.602C292.375 320.941 290.25 320 288 320H287.969C285.719 320 283.594 320.957 282.062 322.633C255.405 352.164 224.436 367.828 192.56 367.941H192.216C160.278 367.941 129.027 352.258 101.902 322.602C100.371 320.941 98.246 320 95.995 320H95.964C93.714 320 91.589 320.957 90.058 322.633C65.401 349.922 36.807 365.508 7.4 367.672C2.993 368.004 -0.319 371.859 0.025 376.281C0.368 380.691 3.368 383.828 8.587 383.703Z" />
        </Icon>
    </>
}