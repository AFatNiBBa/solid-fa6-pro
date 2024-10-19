
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `monkey` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/monkey?s=solid monkey}
 * @preview ![monkey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDkuNSAyNjcuMjVDNTI5LjM3NSAyODAuMjUgNTA1LjYyNSAyODggNDgwIDI4OEM0MjMuMzc1IDI4OCAzNzUuNzUgMjUwLjc1IDM1OC44NzUgMTk5LjYyNUMyNjIuODc1IDIyNC44NzUgMTkyIDMxMiAxOTIgNDE2VjQ0OEMxNzQuMzc1IDQ0OCAxNjAgNDMzLjYyNSAxNjAgNDE2VjE4MC42OTdDMTYwIDEzOC44NTUgMTI5Ljk2NyAxMDAuNjU4IDg4LjM0IDk2LjQyNkM0MC40ODYgOTEuNTYxIDAgMTI5LjEyNSAwIDE3NlYyMjRDMCAyNDEuNjI1IDE0LjM3NSAyNTYgMzIgMjU2UzY0IDI0MS42MjUgNjQgMjI0VjE3NkM2NCAxNjcuMTI1IDcxLjEyNSAxNjAgODAgMTYwUzk2IDE2Ny4xMjUgOTYgMTc2VjQxNkM5NiA0NjkuMDIgMTM4Ljk4IDUxMiAxOTIgNTEySDQzMkM0NDAuODc1IDUxMiA0NDggNTA0Ljg3NSA0NDggNDk2QzQ0OCA0NjkuNiA0MjYuNCA0NDggNDAwIDQ0OEgzNTJMNTA3LjYyNSAzNDQuMjVMNTQyLjM3NSA0NDguMjVMNTQ0IDQ1OC4zNzVWNDgwQzU0NCA0OTcuNjc0IDU1OC4zMjYgNTEyIDU3NiA1MTJTNjA4IDQ5Ny42NzQgNjA4IDQ4MFY0NTguMzc1QzYwOCA0NDggNjA2LjM3NSA0MzcuNzUgNjAzIDQyOEw1NDkuNSAyNjcuMjVaTTU5MiA2NEg1NzAuMTI1QzU1Ni44NzUgMjYuNzUgNTIxLjc1IDAgNDgwIDBTNDAzLjEyNSAyNi43NSAzODkuODc1IDY0SDM2OEMzNDEuNSA2NCAzMjAgODUuNSAzMjAgMTEyUzM0MS41IDE2MCAzNjggMTYwSDM4NEMzODQgMjEzIDQyNyAyNTYgNDgwIDI1NlM1NzYgMjEzIDU3NiAxNjBINTkyQzYxOC41IDE2MCA2NDAgMTM4LjUgNjQwIDExMlM2MTguNSA2NCA1OTIgNjRaTTQ0MCAxMjBDNDMxLjEyNSAxMjAgNDI0IDExMi44NzUgNDI0IDEwNFM0MzEuMTI1IDg4IDQ0MCA4OFM0NTYgOTUuMTI1IDQ1NiAxMDRTNDQ4Ljg3NSAxMjAgNDQwIDEyMFpNNTIwIDEyMEM1MTEuMTI1IDEyMCA1MDQgMTEyLjg3NSA1MDQgMTA0UzUxMS4xMjUgODggNTIwIDg4UzUzNiA5NS4xMjUgNTM2IDEwNFM1MjguODc1IDEyMCA1MjAgMTIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Monkey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M549.5 267.25C529.375 280.25 505.625 288 480 288C423.375 288 375.75 250.75 358.875 199.625C262.875 224.875 192 312 192 416V448C174.375 448 160 433.625 160 416V180.697C160 138.855 129.967 100.658 88.34 96.426C40.486 91.561 0 129.125 0 176V224C0 241.625 14.375 256 32 256S64 241.625 64 224V176C64 167.125 71.125 160 80 160S96 167.125 96 176V416C96 469.02 138.98 512 192 512H432C440.875 512 448 504.875 448 496C448 469.6 426.4 448 400 448H352L507.625 344.25L542.375 448.25L544 458.375V480C544 497.674 558.326 512 576 512S608 497.674 608 480V458.375C608 448 606.375 437.75 603 428L549.5 267.25ZM592 64H570.125C556.875 26.75 521.75 0 480 0S403.125 26.75 389.875 64H368C341.5 64 320 85.5 320 112S341.5 160 368 160H384C384 213 427 256 480 256S576 213 576 160H592C618.5 160 640 138.5 640 112S618.5 64 592 64ZM440 120C431.125 120 424 112.875 424 104S431.125 88 440 88S456 95.125 456 104S448.875 120 440 120ZM520 120C511.125 120 504 112.875 504 104S511.125 88 520 88S536 95.125 536 104S528.875 120 520 120Z" />
        </Icon>
    </>
}