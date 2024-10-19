
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `teeth-open` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/teeth-open?s=light teeth-open}
 * @preview ![teeth-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjg4SDY0QzI4LjY1NCAyODggMCAzMTYuNjUyIDAgMzUyVjM4NEMwIDQzNy4wMiA0Mi45OCA0ODAgOTYgNDgwSDQ4MEM1MzMuMDIgNDgwIDU3NiA0MzcuMDIgNTc2IDM4NFYzNTJDNTc2IDMxNi42NTIgNTQ3LjM0NiAyODggNTEyIDI4OFpNNDE2IDMyMEg0ODBWMzUyQzQ4MCAzNjkuNjQ1IDQ2NS42NDUgMzg0IDQ0OCAzODRTNDE2IDM2OS42NDUgNDE2IDM1MlYzMjBaTTMwNCAzMjBIMzg0VjM2MEMzODQgMzgyLjA1NyAzNjYuMDU3IDQwMCAzNDQgNDAwUzMwNCAzODIuMDU3IDMwNCAzNjBWMzIwWk0xOTIgMzIwSDI3MlYzNjBDMjcyIDM4Mi4wNTcgMjU0LjA1NyA0MDAgMjMyIDQwMFMxOTIgMzgyLjA1NyAxOTIgMzYwVjMyMFpNOTYgMzIwSDE2MFYzNTJDMTYwIDM2OS42NDUgMTQ1LjY0NSAzODQgMTI4IDM4NFM5NiAzNjkuNjQ1IDk2IDM1MlYzMjBaTTU0NCAzODRDNTQ0IDQxOS4yODkgNTE1LjI4OSA0NDggNDgwIDQ0OEg5NkM2MC43MTEgNDQ4IDMyIDQxOS4yODkgMzIgMzg0VjM1MkMzMiAzMzQuMzU1IDQ2LjM1NSAzMjAgNjQgMzIwVjM1MkM2NCAzODcuMzM0IDkyLjY2NiA0MTYgMTI4IDQxNkMxNDQuODM2IDQxNiAxNjAuMDQxIDQwOS4zNTUgMTcxLjQ2OSAzOTguNzE5QzE4NC4yNzEgNDE4LjY4NCAyMDYuNTM1IDQzMiAyMzIgNDMyQzI1NC43NTQgNDMyIDI3NC44MDUgNDIxLjIyNSAyODggNDA0LjczMkMzMDEuMTk1IDQyMS4yMjUgMzIxLjI0NiA0MzIgMzQ0IDQzMkMzNjkuNDY1IDQzMiAzOTEuNzI5IDQxOC42ODQgNDA0LjUzMSAzOTguNzE5QzQxNS45NTkgNDA5LjM1NSA0MzEuMTY0IDQxNiA0NDggNDE2QzQ4My4zMzQgNDE2IDUxMiAzODcuMzM0IDUxMiAzNTJWMzIwQzUyOS42NDUgMzIwIDU0NCAzMzQuMzU1IDU0NCAzNTJWMzg0Wk00ODAgMzJIOTZDNDIuOTggMzIgMCA3NC45OCAwIDEyOFYxOTJDMCAyMjcuMzQ2IDI4LjY1NCAyNTYgNjQgMjU2SDUxMkM1NDcuMzQ2IDI1NiA1NzYgMjI3LjM0NiA1NzYgMTkyVjEyOEM1NzYgNzQuOTggNTMzLjAyIDMyIDQ4MCAzMlpNMTYwIDIyNEg5NlYxOTJDOTYgMTc0LjM1NSAxMTAuMzU1IDE2MCAxMjggMTYwUzE2MCAxNzQuMzU1IDE2MCAxOTJWMjI0Wk0yNzIgMjI0SDE5MlYxNjhDMTkyIDE0NS45NDMgMjA5Ljk0MyAxMjggMjMyIDEyOFMyNzIgMTQ1Ljk0MyAyNzIgMTY4VjIyNFpNMzg0IDIyNEgzMDRWMTY4QzMwNCAxNDUuOTQzIDMyMS45NDMgMTI4IDM0NCAxMjhTMzg0IDE0NS45NDMgMzg0IDE2OFYyMjRaTTQ4MCAyMjRINDE2VjE5MkM0MTYgMTc0LjM1NSA0MzAuMzU1IDE2MCA0NDggMTYwUzQ4MCAxNzQuMzU1IDQ4MCAxOTJWMjI0Wk01NDQgMTkyQzU0NCAyMDkuNjQ1IDUyOS42NDUgMjI0IDUxMiAyMjRWMTkyQzUxMiAxNTYuNjY2IDQ4My4zMzQgMTI4IDQ0OCAxMjhDNDMzLjkyNiAxMjggNDIxLjAyMSAxMzIuNjg2IDQxMC40NTMgMTQwLjM5M0MzOTkuNTk2IDExNC4zNjEgMzczLjkxNiA5NiAzNDQgOTZDMzIxLjI2OCA5NiAzMDEuMjA1IDEwNi44MDEgMjg4IDEyMy4zMDlDMjc0Ljc5NSAxMDYuODAxIDI1NC43MzIgOTYgMjMyIDk2QzIwMi4wODQgOTYgMTc2LjQwNCAxMTQuMzYxIDE2NS41NDcgMTQwLjM5M0MxNTQuOTc5IDEzMi42ODYgMTQyLjA3NCAxMjggMTI4IDEyOEM5Mi42NjYgMTI4IDY0IDE1Ni42NjYgNjQgMTkyVjIyNEM0Ni4zNTUgMjI0IDMyIDIwOS42NDUgMzIgMTkyVjEyOEMzMiA5Mi43MTEgNjAuNzExIDY0IDk2IDY0SDQ4MEM1MTUuMjg5IDY0IDU0NCA5Mi43MTEgNTQ0IDEyOFYxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TeethOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 288H64C28.654 288 0 316.652 0 352V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V352C576 316.652 547.346 288 512 288ZM416 320H480V352C480 369.645 465.645 384 448 384S416 369.645 416 352V320ZM304 320H384V360C384 382.057 366.057 400 344 400S304 382.057 304 360V320ZM192 320H272V360C272 382.057 254.057 400 232 400S192 382.057 192 360V320ZM96 320H160V352C160 369.645 145.645 384 128 384S96 369.645 96 352V320ZM544 384C544 419.289 515.289 448 480 448H96C60.711 448 32 419.289 32 384V352C32 334.355 46.355 320 64 320V352C64 387.334 92.666 416 128 416C144.836 416 160.041 409.355 171.469 398.719C184.271 418.684 206.535 432 232 432C254.754 432 274.805 421.225 288 404.732C301.195 421.225 321.246 432 344 432C369.465 432 391.729 418.684 404.531 398.719C415.959 409.355 431.164 416 448 416C483.334 416 512 387.334 512 352V320C529.645 320 544 334.355 544 352V384ZM480 32H96C42.98 32 0 74.98 0 128V192C0 227.346 28.654 256 64 256H512C547.346 256 576 227.346 576 192V128C576 74.98 533.02 32 480 32ZM160 224H96V192C96 174.355 110.355 160 128 160S160 174.355 160 192V224ZM272 224H192V168C192 145.943 209.943 128 232 128S272 145.943 272 168V224ZM384 224H304V168C304 145.943 321.943 128 344 128S384 145.943 384 168V224ZM480 224H416V192C416 174.355 430.355 160 448 160S480 174.355 480 192V224ZM544 192C544 209.645 529.645 224 512 224V192C512 156.666 483.334 128 448 128C433.926 128 421.021 132.686 410.453 140.393C399.596 114.361 373.916 96 344 96C321.268 96 301.205 106.801 288 123.309C274.795 106.801 254.732 96 232 96C202.084 96 176.404 114.361 165.547 140.393C154.979 132.686 142.074 128 128 128C92.666 128 64 156.666 64 192V224C46.355 224 32 209.645 32 192V128C32 92.711 60.711 64 96 64H480C515.289 64 544 92.711 544 128V192Z" />
        </Icon>
    </>
}