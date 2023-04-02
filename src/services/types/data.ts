//api

export type TRegisterUserData = {
    email: string;
    name: string;
    password: string
};

export type TLoginUserData = Omit<TRegisterUserData, "name">;

export type TResetPasswordData = Omit<TRegisterUserData, "name" | "email">;

export type TConfirmPasswordResetData = Omit<TRegisterUserData, "name" | "email"> & {token:string};

//Data

export type TStatus = "loading"|"success"|"failed";

export type TIngredient = {
    _id:string;
    name:string;
    type:string;
    proteins:number;
    fat:number;
    carbohydrates:number;
    calories:number;
    price:number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export type TUser = {
    email: string;
    name: string;
}

export type TOrder = {
    _id: string;
    ingredients: Array<string>;
    status: "done"|"pending";
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number
}

export type TFetchOptions = {
    method?: "GET"|"POST"|"PATCH";
    headers?:{
        "Content-Type": string;
        authorization?: string;
    }
    body?:string;
}

export type TPlaceholderObject = {
    placeholder: string
}

export type TFormSubmitData = {
        name?: string;
        email?: string;
        password?: string;
        token?: string;
}

export type TFooterString = {
    text: string;
    linkText: string;
    linkTo: string;
}

export type TsocketMiddlewareActions = {
    init:string ;
    initWithUser:string ;
    onOpen:string ;
    onOpenUser:string ;
    onClose:string ;
    onCloseUser:string ;
    onMessage:string ;
    onMessageUser:string ;
    close:string ;
    closeUser:string ;
}

// Components props

export type TConstructorElementWrapperProps = {
    indents?: string;
    type?: "top" | "bottom" | undefined;
    isLocked?: boolean;
    text: string;
    thumbnail: string;
    price: number;
    index?: number;
}

export type TFormFields = "title"|"name"|"email"|"password"|"token";

export type TFeedListProps = {
    orders: ReadonlyArray<TOrder>;
    status?: string;
}

export type TFeedOrderProps = {
    status: string;
    ingredients: string[];
    _id: string;
    number: number;
    createdAt: string;
    name: string;
}

export type TFeedStatusProps = {
    done: Array<TOrder>;
    inWork: Array<TOrder>;
}

export type TFormProps = {
    formSettings:{
        title: string;
        name?: TPlaceholderObject;
        email?: TPlaceholderObject;
        password?: TPlaceholderObject;
        token?: TPlaceholderObject;
        buttonSettings: {
            text: string
        };
    } ;
    onSubmit: (form:TFormSubmitData)=>void;
}

export type TFormPageProps = TFormProps & {
    footer: Array<TFooterString>;
}

export type THeaderButtonProps = {
    iconType: "ListIcon"|"BurgerIcon"|"ProfileIcon" ;
    text: string ;
    indents: string ;
    to: string ;
}

export type TImagesSetProps = {
    links: (string|undefined)[];
}

export type TIngredientElementProps = {
    ingredient: TIngredient
}

export type TModalProps = {
    children: JSX.Element;
    closeModal: ()=>void ;
}

export type TModalOverlayProps = Omit<TModalProps, "children">

export type TOrderIngredientProps = TIngredientElementProps & {factor:number}

export type TSortedByTypeProps = {
    type: string;
    header: string;
    indents?: string;
    data: Array<TIngredient>;
}

export type TRouteProps = {
    element:JSX.Element;
}

export type TOrderPageProps = {
    storage: "userOrders"|"orders"
}

export type TProfilePageProps = Partial<Omit<TModalProps, "closeModal">>