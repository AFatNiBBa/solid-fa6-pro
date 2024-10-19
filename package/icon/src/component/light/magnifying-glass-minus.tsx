
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass-minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-minus?s=light magnifying-glass-minus}
 * @preview ![magnifying-glass-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTkySDEyOEMxMTkuMTU2IDE5MiAxMTIgMTk5LjE1NiAxMTIgMjA4UzExOS4xNTYgMjI0IDEyOCAyMjRIMjg4QzI5Ni44NDQgMjI0IDMwNCAyMTYuODQ0IDMwNCAyMDhTMjk2Ljg0NCAxOTIgMjg4IDE5MlpNNTA3LjMxMiA0ODQuNjg4TDM2NS44NSAzNDMuMjI3QzM5Ny4wNDEgMzA2Ljg0OCA0MTYgMjU5LjY3NiA0MTYgMjA4QzQxNiA5My4xMjUgMzIyLjg3NSAwIDIwOCAwUzAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNkMyNTkuNjc2IDQxNiAzMDYuODQ4IDM5Ny4wMzkgMzQzLjIyNSAzNjUuODUyTDQ4NC42ODcgNTA3LjMxMkM0ODcuODEyIDUxMC40MzggNDkxLjkwNiA1MTIgNDk2IDUxMlM1MDQuMTg4IDUxMC40MzggNTA3LjMxMiA1MDcuMzEyQzUxMy41NjIgNTAxLjA2MiA1MTMuNTYyIDQ5MC45MzggNTA3LjMxMiA0ODQuNjg4Wk0yMDggMzg0QzExMC45NTMgMzg0IDMyIDMwNS4wNDcgMzIgMjA4UzExMC45NTMgMzIgMjA4IDMyUzM4NCAxMTAuOTUzIDM4NCAyMDhTMzA1LjA0NyAzODQgMjA4IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MagnifyingGlassMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M288 192H128C119.156 192 112 199.156 112 208S119.156 224 128 224H288C296.844 224 304 216.844 304 208S296.844 192 288 192ZM507.312 484.688L365.85 343.227C397.041 306.848 416 259.676 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C259.676 416 306.848 397.039 343.225 365.852L484.687 507.312C487.812 510.438 491.906 512 496 512S504.188 510.438 507.312 507.312C513.562 501.062 513.562 490.938 507.312 484.688ZM208 384C110.953 384 32 305.047 32 208S110.953 32 208 32S384 110.953 384 208S305.047 384 208 384Z" />
        </Icon>
    </>
}