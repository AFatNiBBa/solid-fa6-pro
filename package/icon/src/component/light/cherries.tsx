
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cherries` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cherries?s=light cherries}
 * @preview ![cherries](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzIuMTk4IDIyNC4yNzRDNTEyLjY4MyAyMjQuMjc0IDQ4OS4zOCAyMjguMDIyIDQ2MS43OTcgMjM3LjY5NUM0MjUuNjUgODkuMjYzIDI5Ny4zMjggMCAyODcuOTc0IDBDMjU0LjI3OCAwIDI4MC43NzMgMTEwLjIxNSAxNzkuNzI3IDIzOC4yMzJDMTUxLjQ3NyAyMjguMTU4IDEyNy42NzYgMjI0LjI3IDEwNy44MDMgMjI0LjI3QzYuNTIzIDIyNC4yNyAwIDMxNy4wMzUgMCAzMzQuMDI1QzAgMzU5Ljc4IDI0LjU1NSA1MTIgMTkyLjAwNiA1MTJDMzU4LjU1MSA1MTIgMzg0LjAxMyAzNjIuMjE0IDM4NC4wMTMgMzM0LjAyNkMzODQuMDEzIDI3My43MTggMzQ2Ljk3MyAyMjQuMjI1IDI3Ni4wNTEgMjI0LjIyNUMyNjEuNDk4IDIyNC4yMjUgMjQ0Ljg0NSAyMjYuMzA2IDIyNS44ODkgMjMxLjM2OUMyNDYuODkzIDIwMC41MDQgMjc3LjY0MSAxNDIuMTg2IDI5OC42MjcgNDQuNTYzQzMzMi42OTIgNzMuMTg4IDQwMS4xMTQgMTQwLjg2MSA0MjcuNzIzIDIzNS40NDdDNDIyLjkwOCAyMzMuODg1IDQyMC4xODEgMjMyLjI0NyA0MTUuOTgzIDIzMi4yNDdDNDA5LjEwOCAyMzIuMjQ3IDQwMi43MDQgMjM2Ljc4NCA0MDAuNjUzIDI0My43MTlDNDAwLjIwNiAyNDUuMjM0IDM5OS45OTIgMjQ2Ljc2MiAzOTkuOTkyIDI0OC4yNjZDMzk5Ljk5MiAyNjQuMTQ3IDQxMy40NDMgMjYyLjU1OSA0NDEuNzEzIDI3NC42MDlMNDQ3Ljk5NSAyNzcuMjgxTDQ1NC4yNzYgMjc0LjYwOUM0ODMuNTMgMjYyLjE0NyA1MDkuNjI4IDI1NS44OSA1MzEuNzg0IDI1NS44OUM1MzMuNiAyNTUuODkgNjA4IDI1Mi4zMDcgNjA4IDMzNC4wNTRDNjA4IDM1NS44OTcgNTg2LjU5NiA0ODAgNDQ3Ljk5NSA0ODBDNDA4LjY4MiA0ODAgMzkxLjEyOSA0NjkuNTY2IDM4My45OTMgNDY5LjU2NkMzNzUuMDg4IDQ2OS41NjYgMzY3Ljk5NCA0NzYuODE5IDM2Ny45OTQgNDg1LjYxNEMzNjcuOTk0IDQ5Mi4yMTkgMzcyLjEyNyA0OTguMzkyIDM3OC43MTUgNTAwLjY4OEM0MDAuMjQ3IDUwOC4xODggNDIzLjU1NyA1MTIgNDQ3Ljk5NSA1MTJDNjE0LjUzOSA1MTIgNjQwLjAwMSAzNjIuMjE0IDY0MC4wMDEgMzM0LjAyNUM2NDAuMDAxIDMxNi44MTMgNjMzLjM1NSAyMjQuMjc0IDUzMi4xOTggMjI0LjI3NFpNMjc1Ljc5OCAyNTUuODlDMjc3LjYxNCAyNTUuODkgMzUyLjAxMSAyNTIuMzA1IDM1Mi4wMTEgMzM0LjA1NUMzNTIuMDExIDM1NS44OTggMzMwLjYxMiA0ODAgMTkyLjAwNiA0ODBDNTIuNzk5IDQ4MCAzMi4wMDEgMzU2LjMzIDMyLjAwMSAzMzQuMDU0QzMyLjAwMSAyNjQuNjQzIDg1LjA2OSAyNTUuODkxIDEwOC4yMjkgMjU1Ljg5MUMxMzAuMzg1IDI1NS44OTEgMTU2LjQ3NyAyNjIuMTQxIDE4NS43MjUgMjc0LjYwOUwxOTIuMDA2IDI3Ny4yODFMMTk4LjI4OCAyNzQuNjA5QzIyNy41NDMgMjYyLjE0NyAyNTMuNjQyIDI1NS44OSAyNzUuNzk4IDI1NS44OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cherries(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M532.198 224.274C512.683 224.274 489.38 228.022 461.797 237.695C425.65 89.263 297.328 0 287.974 0C254.278 0 280.773 110.215 179.727 238.232C151.477 228.158 127.676 224.27 107.803 224.27C6.523 224.27 0 317.035 0 334.025C0 359.78 24.555 512 192.006 512C358.551 512 384.013 362.214 384.013 334.026C384.013 273.718 346.973 224.225 276.051 224.225C261.498 224.225 244.845 226.306 225.889 231.369C246.893 200.504 277.641 142.186 298.627 44.563C332.692 73.188 401.114 140.861 427.723 235.447C422.908 233.885 420.181 232.247 415.983 232.247C409.108 232.247 402.704 236.784 400.653 243.719C400.206 245.234 399.992 246.762 399.992 248.266C399.992 264.147 413.443 262.559 441.713 274.609L447.995 277.281L454.276 274.609C483.53 262.147 509.628 255.89 531.784 255.89C533.6 255.89 608 252.307 608 334.054C608 355.897 586.596 480 447.995 480C408.682 480 391.129 469.566 383.993 469.566C375.088 469.566 367.994 476.819 367.994 485.614C367.994 492.219 372.127 498.392 378.715 500.688C400.247 508.188 423.557 512 447.995 512C614.539 512 640.001 362.214 640.001 334.025C640.001 316.813 633.355 224.274 532.198 224.274ZM275.798 255.89C277.614 255.89 352.011 252.305 352.011 334.055C352.011 355.898 330.612 480 192.006 480C52.799 480 32.001 356.33 32.001 334.054C32.001 264.643 85.069 255.891 108.229 255.891C130.385 255.891 156.477 262.141 185.725 274.609L192.006 277.281L198.288 274.609C227.543 262.147 253.642 255.89 275.798 255.89Z" />
        </Icon>
    </>
}