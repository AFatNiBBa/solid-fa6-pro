
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pallet` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=thin pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgNDk2SDU1MlYzNjhINjMyQzYzNi40MDYgMzY4IDY0MCAzNjQuNDIyIDY0MCAzNjBTNjM2LjQwNiAzNTIgNjMyIDM1Mkg4QzMuNTk0IDM1MiAwIDM1NS41NzggMCAzNjBTMy41OTQgMzY4IDggMzY4SDg4VjQ5Nkg4QzMuNTk0IDQ5NiAwIDQ5OS41NzggMCA1MDRTMy41OTQgNTEyIDggNTEySDYzMkM2MzYuNDA2IDUxMiA2NDAgNTA4LjQyMiA2NDAgNTA0UzYzNi40MDYgNDk2IDYzMiA0OTZaTTMxMiA0OTZIMTA0VjM2OEgzMTJWNDk2Wk01MzYgNDk2SDMyOFYzNjhINTM2VjQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 496H552V368H632C636.406 368 640 364.422 640 360S636.406 352 632 352H8C3.594 352 0 355.578 0 360S3.594 368 8 368H88V496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H632C636.406 512 640 508.422 640 504S636.406 496 632 496ZM312 496H104V368H312V496ZM536 496H328V368H536V496Z" />
        </Icon>
    </>
}