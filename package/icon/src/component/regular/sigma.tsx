
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sigma` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=regular sigma}
 * @preview ![sigma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzUuOTk5IDEzNlY4MEg4My41ODVMMjQ4LjYyMSAyMzguNjg4QzI1My4zNCAyNDMuMjE5IDI1NS45OTYgMjQ5LjQ2OSAyNTUuOTk2IDI1NlMyNTMuMzQgMjY4Ljc4MSAyNDguNjIxIDI3My4zMTJMODMuNTg1IDQzMkgzMzUuOTk5VjM3NkMzMzUuOTk5IDM2Mi43NSAzNDYuNzQ5IDM1MiAzNTkuOTk5IDM1MkMzNzMuMjUgMzUyIDM4NCAzNjIuNzUgMzg0IDM3NlY0NTZDMzg0IDQ2OS4yNSAzNzMuMjUgNDgwIDM1OS45OTkgNDgwSDIzLjk5QzE0LjIwOCA0ODAgNS4zOTUgNDc0LjA2MiAxLjczOSA0NjQuOTY5UzAuMzAyIDQ0NS41IDcuMzY0IDQzOC42ODdMMTk3LjM3IDI1Nkw3LjM2NCA3My4zMTJDMC4zMDEgNjYuNSAtMS45MTcgNTYuMTI1IDEuNzM5IDQ3LjAzMVMxNC4yMDggMzIgMjMuOTkgMzJIMzU5Ljk5OUMzNzMuMjUgMzIgMzg0IDQyLjc1IDM4NCA1NlYxMzZDMzg0IDE0OS4yNSAzNzMuMjUgMTYwIDM1OS45OTkgMTYwQzM0Ni43NDkgMTYwIDMzNS45OTkgMTQ5LjI1IDMzNS45OTkgMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sigma(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M335.999 136V80H83.585L248.621 238.688C253.34 243.219 255.996 249.469 255.996 256S253.34 268.781 248.621 273.312L83.585 432H335.999V376C335.999 362.75 346.749 352 359.999 352C373.25 352 384 362.75 384 376V456C384 469.25 373.25 480 359.999 480H23.99C14.208 480 5.395 474.062 1.739 464.969S0.302 445.5 7.364 438.687L197.37 256L7.364 73.312C0.301 66.5 -1.917 56.125 1.739 47.031S14.208 32 23.99 32H359.999C373.25 32 384 42.75 384 56V136C384 149.25 373.25 160 359.999 160C346.749 160 335.999 149.25 335.999 136Z" />
        </Icon>
    </>
}