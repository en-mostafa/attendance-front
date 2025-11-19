/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'reset' | 'submit' | undefined;
    buttonClass?: string;
    onClick?: () => void;
    disabled?: boolean
}

export interface InputProps {
    type?: string,
    name: string,
    value?: string,
    placeholder: string,
    inputClass?: string,
    label?: string,
    readOnly?: boolean,
    containerClass?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isPassword?: boolean
}

export interface TextareaProps {
    name: string,
    value: string,
    placeholder: string,
    CustomClass?: string,
    label?: string,
    rows: number,
    cols: number,
    containerClass?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


export interface FetcherProps {
    url: string,
    token: string
}

export interface SelectOptionsProps {
    name?: string,
    id?: number,
    title?: string
}
export interface SelectProps {
    id: number,
    name: string
}
export interface SelectFieldProps {
    label?: string,
    data: SelectProps[],
    selected?: SelectOptionsProps | null,
    setSelected: (selected: SelectProps) => void
}

export interface LatLngProps {
    lat: number,
    lng: number,
}
export interface locationLatLng {
    location: LatLngProps
    setLocation: (location: LatLngProps) => void
}

export interface ModalProps {
    title?: string,
    buttonElement: any,
    btnClass?: string,
    children: React.ReactNode
}

export interface DataKarvanProps {
    name?: string,
    last_name?: string,
    phone_number?: string,
    title?: string
}

export interface CategoryProductsProps {
    id: string,
    title: string,
    description?: string,
    parent_id: number,
    type: string,
    status: string,
    image?: string,
    deleted_at?: string,
    created_at?: string,
    updated_at?: string,

}
export interface FileProps {
    file_name?: string,
    file_path: string | 'img',
    type?: string
}

export interface OptionsProductProps {
    id: number,
    product_id: number,
    section: string,
    type: string,
    title: string,
    price: number,
    color: string
}
export interface SideOptionsProductsProps {
    id: number,
    icon?: string,
    title?: string,
    value?: string
}


export interface ProductsProps {
    id: string | number,
    type: string,
    title: string,
    code: string,
    count: number,
    image: string,
    description?: string,
    price: string,
    no_off_price?: string,
    discount?: number,
    tax?: string,
    is_pack: string,
    category?: CategoryProductsProps,
    files?: FileProps[] | null,
    options: OptionsProductProps[],
    side_options: SideOptionsProductsProps[],
    product_id?: number,
    amount?: number,
    product_title?: string,
    total_discount?: number
}

export interface PageListProps {
    count: number,
    setEmpty: (value: boolean) => void;
}

export interface CheckedInputProductProps {
    id: number,
    title?: string,
    price?: number,
    type?: string
}
export interface OptionListProductProps {
    product: ProductsProps,
    checkedInput: CheckedInputProductProps[],
    setCheckedInput: (checkedInput: CheckedInputProductProps[] | any) => void
}

export interface CategoryChildrenProps {
    id: number,
    title: string,
    first_children: {
        id: number,
        title: string,
    }[]
}
export interface CategoryItemProps {
    id: number,
    title: string,
    first_children: CategoryChildrenProps[]

}
export interface UserProps {
    id: string,
    name: string,
    last_name: string,
    phone_number: string,
    image: string,
    address: string,
    post_code: string,
    complete_register: string,
    lat: number,
    lng: number,
    total_buy?: number,
    total_share?: number,
    have_karvan: string,
    province: null | AreaProps,
    city: null | AreaProps,
    karvan: {
        id: 5632,
        name: string,
        last_name: string,
        phone_number: string,
        karvan_number: string,
        title: string
    }
}
export interface AreaProps {
    id?: number,
    name?: string
}

export interface NotificationProps {
    id: number,
    title: string,
    description?: string,
    status: string
}

export interface OrderProps {
    id: number,
    jalali_create: string,
    amount: number,
    status: string,
    total_discount: number,
    send_price: number,
    user_name: string,
    user_last_name: string,
    user_phone_number: string,
    address: string,
    products: ProductsProps[]
    user: UserProps,
    factor_id: number
}

export interface OptionProductProps {
    id: number,
    product_id: number,
    section: string,
    type: string,
    title: string,
    price: number,
    color: string
}

export interface PaymentsProps {
    id: number,
    type: string,
}

export interface FactorProps {
    factor_id: number,
    total_price: number,
    total_discount: number,
    total_tax: number,
    jalali_create: string,
    send_price: number,
    amount: number,
    description: string,
    user: UserProps,
    items: {
        amount: number,
        count: number,
        options: OptionProductProps[]
        product: ProductsProps
    }[],
    payments: PaymentsProps[]
}
export interface FileChatProps {
    file_name: string,
    file_path: string
}
export interface MessageProps {
    ticket_id: number,
    message: string,
    jalali_create: string,
    user_name: string,
    user_last_name: string,
    from: string,
    file: FileChatProps[]
}

export interface TicketProps {
    id: number,
    title: string,
    status: string,
    department: string,
    jalali_create: string,
    messages: MessageProps[]
}
export interface StatusProps {
    id: number,
    title?: string,
    name: string
}

export interface TransactionProps {
    id: number,
    price: string,
    jalali_create: string,
    status: string,
    text_id?: string,
    description: string | null
    shaba: {
        shaba: string,
        name: string
    }
}

export interface OrdersPeyck {
    id: number,
    status: string,
    address: string,
    province: string,
    city: string,
    lat: string,
    lng: string,
    post_code: string,
    user_name: string,
    user_last_name: string,
    user_phone_number: string,
    products: {
        title: string
    }[]
}
export interface LatLngUserProps {
    lat: any,
    lng: any,
}
export interface ModalDeliveredProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
    id: number;
    setStatus: (status: string) => void;
    mutate: any
}

