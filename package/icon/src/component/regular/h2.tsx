
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h2` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=regular h2}
 * @preview ![h2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgNjRDMjgyLjc1IDY0IDI3MiA3NC43NSAyNzIgODhWMjI0SDQ4Vjg4QzQ4IDc0Ljc1IDM3LjI1IDY0IDI0IDY0UzAgNzQuNzUgMCA4OFY0MjRDMCA0MzcuMjUgMTAuNzUgNDQ4IDI0IDQ0OFM0OCA0MzcuMjUgNDggNDI0VjI3MkgyNzJWNDI0QzI3MiA0MzcuMjUgMjgyLjc1IDQ0OCAyOTYgNDQ4UzMyMCA0MzcuMjUgMzIwIDQyNFY4OEMzMjAgNzQuNzUgMzA5LjI1IDY0IDI5NiA2NFpNNjE2IDQwMC4yMTlINDUzLjg0NEw1NzkuNTE2IDI4NS4zNzVDNjMwLjkwNiAyMzkuODc1IDYzNi45MDYgMTYyLjcxOSA1OTMuMTU2IDEwOS43MTlDNTcxLjM0NCA4My4yODEgNTQwLjU5NCA2Ny4yNSA1MDYuNTc4IDY0LjU5NEM0NzIuNTc4IDYyLjAzMSA0MzkuODQ0IDcyLjkzOCA0MTQuMjUgOTUuNTMxTDM4OC41OTQgMTE4LjE4OEMzNzguNjU2IDEyNi45NjkgMzc3LjcxOSAxNDIuMTI1IDM4Ni41IDE1Mi4wNjNDMzk1LjI2NiAxNjIgNDEwLjQzOCAxNjIuOTY5IDQyMC4zNzUgMTU0LjE4OEw0NDYuMDMxIDEzMS41QzQ2MS43OTcgMTE3LjU5NCA0ODIuMjM0IDExMC45MDYgNTAyLjgxMyAxMTIuNDM4QzUyMy43NSAxMTQuMDk0IDU0Mi42ODggMTIzLjk2OSA1NTYuMTQxIDE0MC4yODFDNTgyLjg3NSAxNzIuNjg4IDU3OS4wOTQgMjIxLjY1NiA1NDcuNDIyIDI0OS42ODhMMzc1LjgxMyA0MDYuNUMzNjguNSA0MTMuMTg4IDM2Ni4wNDcgNDIzLjY1NiAzNjkuNjI1IDQzMi45MDZDMzczLjIwMyA0NDIuMTI1IDM4Mi4wOTQgNDQ4LjIxOSAzOTIgNDQ4LjIxOUg2MTZDNjI5LjI1IDQ0OC4yMTkgNjQwIDQzNy40NjkgNjQwIDQyNC4yMTlTNjI5LjI1IDQwMC4yMTkgNjE2IDQwMC4yMTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function H2(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M296 64C282.75 64 272 74.75 272 88V224H48V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424V272H272V424C272 437.25 282.75 448 296 448S320 437.25 320 424V88C320 74.75 309.25 64 296 64ZM616 400.219H453.844L579.516 285.375C630.906 239.875 636.906 162.719 593.156 109.719C571.344 83.281 540.594 67.25 506.578 64.594C472.578 62.031 439.844 72.938 414.25 95.531L388.594 118.188C378.656 126.969 377.719 142.125 386.5 152.063C395.266 162 410.438 162.969 420.375 154.188L446.031 131.5C461.797 117.594 482.234 110.906 502.813 112.438C523.75 114.094 542.688 123.969 556.141 140.281C582.875 172.688 579.094 221.656 547.422 249.688L375.813 406.5C368.5 413.188 366.047 423.656 369.625 432.906C373.203 442.125 382.094 448.219 392 448.219H616C629.25 448.219 640 437.469 640 424.219S629.25 400.219 616 400.219Z" />
        </Icon>
    </>
}