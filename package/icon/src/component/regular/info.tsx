
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `info` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=regular info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjggNDY0SDEyMFYyMDBDMTIwIDE4Ni43NSAxMDkuMjUgMTc2IDk2IDE3Nkg1NkM0Mi43NSAxNzYgMzIgMTg2Ljc1IDMyIDIwMFM0Mi43NSAyMjQgNTYgMjI0SDcyVjQ2NEgyNEMxMC43NSA0NjQgMCA0NzQuNzUgMCA0ODhTMTAuNzUgNTEyIDI0IDUxMkgxNjhDMTgxLjI1IDUxMiAxOTIgNTAxLjI1IDE5MiA0ODhTMTgxLjI1IDQ2NCAxNjggNDY0Wk05NiAxMjhDMTIyLjUxIDEyOCAxNDQgMTA2LjUxIDE0NCA4MFMxMjIuNTEgMzIgOTYgMzJTNDggNTMuNDkgNDggODBTNjkuNDkgMTI4IDk2IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Info(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M168 464H120V200C120 186.75 109.25 176 96 176H56C42.75 176 32 186.75 32 200S42.75 224 56 224H72V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H168C181.25 512 192 501.25 192 488S181.25 464 168 464ZM96 128C122.51 128 144 106.51 144 80S122.51 32 96 32S48 53.49 48 80S69.49 128 96 128Z" />
        </Icon>
    </>
}