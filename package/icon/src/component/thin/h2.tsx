
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h2` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=thin h2}
 * @preview ![h2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgNDMySDQwNC42MjVMNTc3LjI5NyAyNzQuMzQ0QzYwMS44NTkgMjUzLjUzMSA2MTYuNzUgMjI0LjY1NiA2MTkuMjE5IDE5My4xMjVDNjIxLjY4NyAxNjEuNzgxIDYxMS41OTQgMTMxLjIxOSA1OTAuODEyIDEwNy4wOTRDNTQ2LjUgNTUuNjU2IDQ2OC4xMjUgNDkuNTYyIDQxNi4xNDEgOTMuNjI1TDM4Ni44MjggMTE4LjQzOEMzODMuNDUzIDEyMS4yODEgMzgzLjA0NyAxMjYuMzEzIDM4NS44OTEgMTI5LjY4OEMzODguNzUgMTMzLjA5NCAzOTMuODI4IDEzMy41MzEgMzk3LjE3MiAxMzAuNjI1TDQyNi40ODQgMTA1LjgxM0M0NzEuNzk3IDY3LjQ2OSA1NDAuMDc4IDcyLjY4OCA1NzguNjg4IDExNy41MzFDNTk2LjY1NiAxMzguNDA2IDYwNS4zOTEgMTY0LjgxMyA2MDMuMjY2IDE5MS44NzVDNjAxLjE0MSAyMTkuMTI1IDU4OC4yMzQgMjQ0LjA5NCA1NjYuNzM0IDI2Mi4zNDRMMzc4LjYwOSA0MzQuMDk0QzM3Ni4xNzIgNDM2LjMxMiAzNzUuMzQ0IDQzOS44MTIgMzc2LjU0NyA0NDIuOTA2QzM3Ny43MzQgNDQ1Ljk2OSAzODAuNzAzIDQ0OCAzODQgNDQ4SDYzMkM2MzYuNDIyIDQ0OCA2NDAgNDQ0LjQwNiA2NDAgNDQwUzYzNi40MjIgNDMyIDYzMiA0MzJaTTMxMiA2NEMzMDcuNTc4IDY0IDMwNCA2Ny41OTQgMzA0IDcyVjI0MEgxNlY3MkMxNiA2Ny41OTQgMTIuNDIyIDY0IDggNjRTMCA2Ny41OTQgMCA3MlY0NDBDMCA0NDQuNDA2IDMuNTc4IDQ0OCA4IDQ0OFMxNiA0NDQuNDA2IDE2IDQ0MFYyNTZIMzA0VjQ0MEMzMDQgNDQ0LjQwNiAzMDcuNTc4IDQ0OCAzMTIgNDQ4UzMyMCA0NDQuNDA2IDMyMCA0NDBWNzJDMzIwIDY3LjU5NCAzMTYuNDIyIDY0IDMxMiA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function H2(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 432H404.625L577.297 274.344C601.859 253.531 616.75 224.656 619.219 193.125C621.687 161.781 611.594 131.219 590.812 107.094C546.5 55.656 468.125 49.562 416.141 93.625L386.828 118.438C383.453 121.281 383.047 126.313 385.891 129.688C388.75 133.094 393.828 133.531 397.172 130.625L426.484 105.813C471.797 67.469 540.078 72.688 578.688 117.531C596.656 138.406 605.391 164.813 603.266 191.875C601.141 219.125 588.234 244.094 566.734 262.344L378.609 434.094C376.172 436.312 375.344 439.812 376.547 442.906C377.734 445.969 380.703 448 384 448H632C636.422 448 640 444.406 640 440S636.422 432 632 432ZM312 64C307.578 64 304 67.594 304 72V240H16V72C16 67.594 12.422 64 8 64S0 67.594 0 72V440C0 444.406 3.578 448 8 448S16 444.406 16 440V256H304V440C304 444.406 307.578 448 312 448S320 444.406 320 440V72C320 67.594 316.422 64 312 64Z" />
        </Icon>
    </>
}