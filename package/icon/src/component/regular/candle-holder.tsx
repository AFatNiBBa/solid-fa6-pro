
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `candle-holder` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=regular candle-holder}
 * @preview ![candle-holder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzIuMDE2IDM2OC4xMDdDMzQ4LjQ3NSAzNjkuMzc3IDMyNy4yMTMgMzg0LjE3MiAzMTQuODQgNDA0LjI0QzMwMC45MjYgNDI2LjgxMiAzMDIuMzMyIDQ0Ni43MyAzMDguMzc1IDQ2NEgyNzJWMjcyQzI3MiAyNDUuNiAyNTAuNCAyMjQgMjI0IDIyNEg5NkM2OS42IDIyNCA0OCAyNDUuNiA0OCAyNzJWNDY0QzQyLjY4MiA0NjQuMDA0IDI5LjQ3MSA0NjQgMjQgNDY0QzEwLjc0NiA0NjQgMCA0NzQuNzQ0IDAgNDg4QzAgNTAxLjI1NCAxMC43NDYgNTEyIDI0IDUxMkMyNCA1MTIgMjkzLjY2MiA1MTIgMzcyLjc0OCA1MTJDNDA3LjUzMyA1MTIgNDM5LjgxNiA0ODguNzc5IDQ0Ni41NTMgNDU0LjY1QzQ1NS45MzIgNDA3LjEyMSA0MTguNDE4IDM2NS42MDUgMzcyLjAxNiAzNjguMTA3Wk0yMjQgNDY0SDk2VjI3MkgxMjhWMzI4QzEyOCAzNDEuMjUgMTM4Ljc1IDM1MiAxNTIgMzUyUzE3NiAzNDEuMjUgMTc2IDMyOFYyNzJIMjI0VjQ2NFpNMzc2IDQ2NEMzNjIuNzUgNDY0IDM1MiA0NTMuMjUgMzUyIDQ0MFMzNjIuNzUgNDE2IDM3NiA0MTZTNDAwIDQyNi43NSA0MDAgNDQwUzM4OS4yNSA0NjQgMzc2IDQ2NFpNMTYwIDE5MkMyMDUuODc1IDE5MiAyMzggMTU5LjM3NSAyMzggMTEyLjc1QzIzOCA4Mi43NSAyMDUuMzc1IDM3Ljg3NSAxNjAgMEMxMTQuMzc1IDM4IDgyIDgyLjg3NSA4MiAxMTIuNzVDODIgMTU5LjM3NSAxMTQuMTI1IDE5MiAxNjAgMTkyWk0xNjAgNjYuMTI1QzE4MCA4OC4yNSAxODkuNzUgMTA2LjExMSAxOTAgMTEyLjc1QzE5MC40MzggMTI0LjM2NyAxODYuMTI1IDE0NCAxNjAgMTQ0UzEzMCAxMjQuMzc1IDEzMCAxMTNDMTMwLjUgMTA2LjI1IDE0MCA4OC4yNSAxNjAgNjYuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CandleHolder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M372.016 368.107C348.475 369.377 327.213 384.172 314.84 404.24C300.926 426.812 302.332 446.73 308.375 464H272V272C272 245.6 250.4 224 224 224H96C69.6 224 48 245.6 48 272V464C42.682 464.004 29.471 464 24 464C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512C24 512 293.662 512 372.748 512C407.533 512 439.816 488.779 446.553 454.65C455.932 407.121 418.418 365.605 372.016 368.107ZM224 464H96V272H128V328C128 341.25 138.75 352 152 352S176 341.25 176 328V272H224V464ZM376 464C362.75 464 352 453.25 352 440S362.75 416 376 416S400 426.75 400 440S389.25 464 376 464ZM160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM160 66.125C180 88.25 189.75 106.111 190 112.75C190.438 124.367 186.125 144 160 144S130 124.375 130 113C130.5 106.25 140 88.25 160 66.125Z" />
        </Icon>
    </>
}