
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-christmas` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-christmas?s=regular star-christmas}
 * @preview ![star-christmas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODcuNzUgMjI0LjgyTDM2NS44NzUgMTk0LjMyOEw0MjYuNjI1IDExOC45NzFDNDM0LjM3NSAxMDkuMjIzIDQzMy43NSA5NS43MjcgNDI0Ljg3NSA4Ni45NzlDNDE2LjEyNSA3OC4yMzEgNDAyLjc1IDc3LjYwNiAzOTIuODc1IDg1LjIyOUwzMTcuMzc1IDE0NS43MTRMMjg3LjEyNSAyNC4yNDRDMjgzLjUgOS45OTggMjcwLjc1IDAgMjU2IDBIMjU1Ljg3NUMyNDEuMTI1IDAgMjI4LjM3NSA5Ljk5OCAyMjQuODc1IDI0LjI0NEwxOTQuMzc1IDE0Ni4yMTRMMTE5IDg1LjQ3OUMxMDkuMjUgNzcuNzMxIDk1Ljc1IDc4LjM1NiA4NyA4Ny4yMjlDNzguMjUgOTUuOTc3IDc3LjUgMTA5LjM0OCA4NS4yNSAxMTkuMjIxTDE0NS43NSAxOTQuNzAyTDI0LjI1IDIyNC44MkM5Ljk5OSAyMjguNDQ0IDAgMjQxLjE5MSAwIDI1NS45MzhDMCAyNzAuNjg0IDkuOTk5IDI4My40MzEgMjQuMjUgMjg3LjA1NUwxNDYuMTI1IDMxNy41NDdMODUuMzc1IDM5Mi45MDRDNzcuNjI1IDQwMi42NTIgNzguMjUgNDE2LjE0OCA4Ny4xMjUgNDI0Ljg5NkM5MS43NSA0MjkuNjQ1IDk3Ljg3NSA0MzIuMDIgMTAzLjg3NSA0MzIuMDJDMTA5LjI1IDQzMi4wMiAxMTQuNSA0MzAuMTQ1IDExOSA0MjYuNjQ2TDE5NC41IDM2Ni4xNjFMMjI0Ljg3NSA0ODcuNjMxQzIyOC4zNzUgNTAyLjAwMyAyNDEuMjUgNTEyIDI1NS44NzUgNTEySDI1NkMyNzAuNzUgNTEyIDI4My41IDUwMi4wMDMgMjg3LjEyNSA0ODcuNjMxTDMxNy42MjUgMzY1LjkxMUwzOTMgNDI2LjY0NkMzOTcuNSA0MzAuMTQ1IDQwMi43NSA0MzIuMDIgNDA4LjEyNSA0MzIuMDJDNDE0LjI1IDQzMi4wMiA0MjAuMjUgNDI5LjY0NSA0MjQuODc1IDQyNC44OTZDNDMzLjc1IDQxNi4xNDggNDM0LjM3NSA0MDIuNjUyIDQyNi42MjUgMzkyLjkwNEwzNjYuMjUgMzE3LjQyM0w0ODcuNzUgMjg3LjA1NUM1MDEuOTk5IDI4My40MzEgNTEyIDI3MC42ODQgNTEyIDI1NS45MzhDNTEyIDI0MS4xOTEgNTAxLjk5OSAyMjguNDQ0IDQ4Ny43NSAyMjQuODJaTTI4Ny42MjUgMjg3LjU1NUwyNTYgNDE0LjAyNEwyMjQuMzc1IDI4Ny41NTVMOTcuODc1IDI1NS45MzhMMjI0LjM3NSAyMjQuMzJMMjU2IDk3Ljg1MUwyODcuNjI1IDIyNC4zMkw0MTQuMTI1IDI1NS45MzhMMjg3LjYyNSAyODcuNTU1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarChristmas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M487.75 224.82L365.875 194.328L426.625 118.971C434.375 109.223 433.75 95.727 424.875 86.979C416.125 78.231 402.75 77.606 392.875 85.229L317.375 145.714L287.125 24.244C283.5 9.998 270.75 0 256 0H255.875C241.125 0 228.375 9.998 224.875 24.244L194.375 146.214L119 85.479C109.25 77.731 95.75 78.356 87 87.229C78.25 95.977 77.5 109.348 85.25 119.221L145.75 194.702L24.25 224.82C9.999 228.444 0 241.191 0 255.938C0 270.684 9.999 283.431 24.25 287.055L146.125 317.547L85.375 392.904C77.625 402.652 78.25 416.148 87.125 424.896C91.75 429.645 97.875 432.02 103.875 432.02C109.25 432.02 114.5 430.145 119 426.646L194.5 366.161L224.875 487.631C228.375 502.003 241.25 512 255.875 512H256C270.75 512 283.5 502.003 287.125 487.631L317.625 365.911L393 426.646C397.5 430.145 402.75 432.02 408.125 432.02C414.25 432.02 420.25 429.645 424.875 424.896C433.75 416.148 434.375 402.652 426.625 392.904L366.25 317.423L487.75 287.055C501.999 283.431 512 270.684 512 255.938C512 241.191 501.999 228.444 487.75 224.82ZM287.625 287.555L256 414.024L224.375 287.555L97.875 255.938L224.375 224.32L256 97.851L287.625 224.32L414.125 255.938L287.625 287.555Z" />
        </Icon>
    </>
}