
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `border-inner` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-inner?s=light border-inner}
 * @preview ![border-inner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggODhDMTQxLjI1NCA4OCAxNTIgNzcuMjU0IDE1MiA2NEMxNTIgNTAuNzQ0IDE0MS4yNTQgNDAgMTI4IDQwUzEwNCA1MC43NDQgMTA0IDY0QzEwNCA3Ny4yNTQgMTE0Ljc0NiA4OCAxMjggODhaTTMyIDg4QzQ1LjI1NCA4OCA1NiA3Ny4yNTQgNTYgNjRDNTYgNTAuNzQ0IDQ1LjI1NCA0MCAzMiA0MFM4IDUwLjc0NCA4IDY0QzggNzcuMjU0IDE4Ljc0NiA4OCAzMiA4OFpNMzIgMTg0QzQ1LjI1NCAxODQgNTYgMTczLjI1NCA1NiAxNjBDNTYgMTQ2Ljc0NCA0NS4yNTQgMTM2IDMyIDEzNlM4IDE0Ni43NDQgOCAxNjBDOCAxNzMuMjU0IDE4Ljc0NiAxODQgMzIgMTg0Wk00MTYgODhDNDI5LjI1NCA4OCA0NDAgNzcuMjU0IDQ0MCA2NEM0NDAgNTAuNzQ0IDQyOS4yNTQgNDAgNDE2IDQwUzM5MiA1MC43NDQgMzkyIDY0QzM5MiA3Ny4yNTQgNDAyLjc0NiA4OCA0MTYgODhaTTQxNiAxODRDNDI5LjI1NCAxODQgNDQwIDE3My4yNTQgNDQwIDE2MEM0NDAgMTQ2Ljc0NCA0MjkuMjU0IDEzNiA0MTYgMTM2UzM5MiAxNDYuNzQ0IDM5MiAxNjBDMzkyIDE3My4yNTQgNDAyLjc0NiAxODQgNDE2IDE4NFpNMzIwIDg4QzMzMy4yNTQgODggMzQ0IDc3LjI1NCAzNDQgNjRDMzQ0IDUwLjc0NCAzMzMuMjU0IDQwIDMyMCA0MFMyOTYgNTAuNzQ0IDI5NiA2NEMyOTYgNzcuMjU0IDMwNi43NDYgODggMzIwIDg4Wk0zMiA0MjRDMTguNzQ2IDQyNCA4IDQzNC43NDQgOCA0NDhDOCA0NjEuMjU0IDE4Ljc0NiA0NzIgMzIgNDcyUzU2IDQ2MS4yNTQgNTYgNDQ4QzU2IDQzNC43NDQgNDUuMjU0IDQyNCAzMiA0MjRaTTQxNiAzMjhDNDAyLjc0NiAzMjggMzkyIDMzOC43NDQgMzkyIDM1MkMzOTIgMzY1LjI1NCA0MDIuNzQ2IDM3NiA0MTYgMzc2UzQ0MCAzNjUuMjU0IDQ0MCAzNTJDNDQwIDMzOC43NDQgNDI5LjI1NCAzMjggNDE2IDMyOFpNNDE2IDQyNEM0MDIuNzQ2IDQyNCAzOTIgNDM0Ljc0NCAzOTIgNDQ4QzM5MiA0NjEuMjU0IDQwMi43NDYgNDcyIDQxNiA0NzJTNDQwIDQ2MS4yNTQgNDQwIDQ0OEM0NDAgNDM0Ljc0NCA0MjkuMjU0IDQyNCA0MTYgNDI0Wk0zMjAgNDI0QzMwNi43NDYgNDI0IDI5NiA0MzQuNzQ0IDI5NiA0NDhDMjk2IDQ2MS4yNTQgMzA2Ljc0NiA0NzIgMzIwIDQ3MlMzNDQgNDYxLjI1NCAzNDQgNDQ4QzM0NCA0MzQuNzQ0IDMzMy4yNTQgNDI0IDMyMCA0MjRaTTEyOCA0MjRDMTE0Ljc0NiA0MjQgMTA0IDQzNC43NDQgMTA0IDQ0OEMxMDQgNDYxLjI1NCAxMTQuNzQ2IDQ3MiAxMjggNDcyUzE1MiA0NjEuMjU0IDE1MiA0NDhDMTUyIDQzNC43NDQgMTQxLjI1NCA0MjQgMTI4IDQyNFpNMzIgMzI4QzE4Ljc0NiAzMjggOCAzMzguNzQ0IDggMzUyQzggMzY1LjI1NCAxOC43NDYgMzc2IDMyIDM3NlM1NiAzNjUuMjU0IDU2IDM1MkM1NiAzMzguNzQ0IDQ1LjI1NCAzMjggMzIgMzI4Wk00MzIgMjQwSDI0MFY0OEMyNDAgMzkuMTU2IDIzMi44NDQgMzIgMjI0IDMyUzIwOCAzOS4xNTYgMjA4IDQ4VjI0MEgxNkM3LjE1NiAyNDAgMCAyNDcuMTU2IDAgMjU2UzcuMTU2IDI3MiAxNiAyNzJIMjA4VjQ2NEMyMDggNDcyLjg0NCAyMTUuMTU2IDQ4MCAyMjQgNDgwUzI0MCA0NzIuODQ0IDI0MCA0NjRWMjcySDQzMkM0NDAuODQ0IDI3MiA0NDggMjY0Ljg0NCA0NDggMjU2UzQ0MC44NDQgMjQwIDQzMiAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BorderInner(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M128 88C141.254 88 152 77.254 152 64C152 50.744 141.254 40 128 40S104 50.744 104 64C104 77.254 114.746 88 128 88ZM32 88C45.254 88 56 77.254 56 64C56 50.744 45.254 40 32 40S8 50.744 8 64C8 77.254 18.746 88 32 88ZM32 184C45.254 184 56 173.254 56 160C56 146.744 45.254 136 32 136S8 146.744 8 160C8 173.254 18.746 184 32 184ZM416 88C429.254 88 440 77.254 440 64C440 50.744 429.254 40 416 40S392 50.744 392 64C392 77.254 402.746 88 416 88ZM416 184C429.254 184 440 173.254 440 160C440 146.744 429.254 136 416 136S392 146.744 392 160C392 173.254 402.746 184 416 184ZM320 88C333.254 88 344 77.254 344 64C344 50.744 333.254 40 320 40S296 50.744 296 64C296 77.254 306.746 88 320 88ZM32 424C18.746 424 8 434.744 8 448C8 461.254 18.746 472 32 472S56 461.254 56 448C56 434.744 45.254 424 32 424ZM416 328C402.746 328 392 338.744 392 352C392 365.254 402.746 376 416 376S440 365.254 440 352C440 338.744 429.254 328 416 328ZM416 424C402.746 424 392 434.744 392 448C392 461.254 402.746 472 416 472S440 461.254 440 448C440 434.744 429.254 424 416 424ZM320 424C306.746 424 296 434.744 296 448C296 461.254 306.746 472 320 472S344 461.254 344 448C344 434.744 333.254 424 320 424ZM128 424C114.746 424 104 434.744 104 448C104 461.254 114.746 472 128 472S152 461.254 152 448C152 434.744 141.254 424 128 424ZM32 328C18.746 328 8 338.744 8 352C8 365.254 18.746 376 32 376S56 365.254 56 352C56 338.744 45.254 328 32 328ZM432 240H240V48C240 39.156 232.844 32 224 32S208 39.156 208 48V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H208V464C208 472.844 215.156 480 224 480S240 472.844 240 464V272H432C440.844 272 448 264.844 448 256S440.844 240 432 240Z" />
        </Icon>
    </>
}