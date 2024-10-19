
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=solid sun}
 * @preview ![sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTYwQzIwMi45OCAxNjAgMTYwIDIwMi45OCAxNjAgMjU2UzIwMi45OCAzNTIgMjU2IDM1MlMzNTIgMzA5LjAyIDM1MiAyNTZTMzA5LjAxOSAxNjAgMjU2IDE2MFpNNTA5LjI2MyAzNDcuMDA4TDQ0Ni4xMDkgMjU1Ljk5OEw1MDkuMjYyIDE2NC45ODhDNTE1LjU5NCAxNTUuODYzIDUxMC4zNjUgMTQzLjI0NiA0OTkuNDM1IDE0MS4yNjlMMzkwLjQyOSAxMjEuNTdMMzcwLjcyOCAxMi41NjJDMzY4Ljc1NCAxLjYzIDM1Ni4xMzUgLTMuNTk1IDM0Ny4wMDggMi43MzdMMjU2IDY1Ljg4OEwxNjQuOTkgMi43MzVDMTU1Ljg2NSAtMy41OTcgMTQzLjI0NiAxLjYyOCAxNDEuMjY5IDEyLjU2TDEyMS41NyAxMjEuNTdMMTIuNTYyIDE0MS4yNjdDMS42MzMgMTQzLjI0NCAtMy41OTYgMTU1Ljg2MyAyLjczNiAxNjQuOTg2TDY1Ljg5IDI1NkwyLjczOCAzNDcuMDFDLTMuNTk0IDM1Ni4xMzUgMS42MzMgMzY4Ljc1MiAxMi41NjIgMzcwLjcyN0wxMjEuNTcgMzkwLjQyNkwxNDEuMjY5IDQ5OS40MzZDMTQzLjI0NCA1MTAuMzY2IDE1NS44NjMgNTE1LjU5NSAxNjQuOTkgNTA5LjI2MUwyNTYgNDQ2LjEwOEwzNDcuMDEgNTA5LjI2MUMzNTYuMTM3IDUxNS41OTUgMzY4Ljc1NiA1MTAuMzY4IDM3MC43MyA0OTkuNDM4TDM5MC40MjggMzkwLjQyNkw0OTkuNDM3IDM3MC43MjdDNTEwLjM2OSAzNjguNzUyIDUxNS41OTYgMzU2LjEzNSA1MDkuMjYzIDM0Ny4wMDhaTTI1NiAzODRDMTg1LjMwNiAzODQgMTI4IDMyNi42OTIgMTI4IDI1NkMxMjggMTg1LjMwNiAxODUuMzA2IDEyOCAyNTYgMTI4UzM4NCAxODUuMzA2IDM4NCAyNTZDMzg0IDMyNi42OTIgMzI2LjY5MyAzODQgMjU2IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 160C202.98 160 160 202.98 160 256S202.98 352 256 352S352 309.02 352 256S309.019 160 256 160ZM509.263 347.008L446.109 255.998L509.262 164.988C515.594 155.863 510.365 143.246 499.435 141.269L390.429 121.57L370.728 12.562C368.754 1.63 356.135 -3.595 347.008 2.737L256 65.888L164.99 2.735C155.865 -3.597 143.246 1.628 141.269 12.56L121.57 121.57L12.562 141.267C1.633 143.244 -3.596 155.863 2.736 164.986L65.89 256L2.738 347.01C-3.594 356.135 1.633 368.752 12.562 370.727L121.57 390.426L141.269 499.436C143.244 510.366 155.863 515.595 164.99 509.261L256 446.108L347.01 509.261C356.137 515.595 368.756 510.368 370.73 499.438L390.428 390.426L499.437 370.727C510.369 368.752 515.596 356.135 509.263 347.008ZM256 384C185.306 384 128 326.692 128 256C128 185.306 185.306 128 256 128S384 185.306 384 256C384 326.692 326.693 384 256 384Z" />
        </Icon>
    </>
}