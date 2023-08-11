export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure the defaults of Nuxt Icon
   * 
  */
  nuxtIcon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size. Set to false to disable the sizing of icon in style.
    * 
    * @default "1em"
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | false,

   /**
    * CSS Class
    * 
    * Set the default CSS class
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
    * 
    * @studioInputObjectValueType icon
   */
   aliases?: { [alias: string]: string },
  },

  nui?: {
   defaultShapes?: {
    /**
     * Default shape for the BaseAccordion component
     * 
     * @default "rounded"
    */
    accordion?: 'straight' | 'rounded' | 'curved',

    /**
     * Default shape for the BaseAutocompleteItem component
     * 
     * @default "rounded"
    */
    autocompleteItem?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseAvatar component
     * 
     * @default "full"
    */
    avatar?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseButton component
     * 
     * @default "rounded"
    */
    button?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseButtonAction component
     * 
     * @default "rounded"
    */
    buttonAction?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseButtonIcon component
     * 
     * @default "rounded"
    */
    buttonIcon?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseButtonIcon component
     * 
     * @default "full"
    */
    buttonClose?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseCard component
     * 
     * @default "rounded"
    */
    card?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseDropdown component
     * 
     * @default "rounded"
    */
    dropdown?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseIconBox component
     * 
     * @default "rounded"
    */
    iconBox?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for all input components component - BaseAutocomplete - BaseCheckbox - BaseInput - BaseInputFile - BaseInputListbox - BaseInputSelect - BaseInputTextarea
     * 
     * @default "rounded"
    */
    input?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseMessage component
     * 
     * @default "curved"
    */
    message?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BasePagination component
     * 
     * @default "rounded"
    */
    pagination?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseProgress component
     * 
     * @default "full"
    */
    progress?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseProse component
     * 
     * @default "rounded"
    */
    prose?: 'straight' | 'rounded' | 'curved',

    /**
     * Default shape for the BaseTabSlider component
     * 
     * @default "rounded"
    */
    tabSlider?: 'straight' | 'rounded' | 'curved' | 'full',

    /**
     * Default shape for the BaseTag component
     * 
     * @default "rounded"
    */
    tag?: 'straight' | 'rounded' | 'curved' | 'full',
   },
  },

  tairo?: {
   /** @default "Tairo" */
   title?: string,

   error?: {
    logo?: {
     /** @default "TairoLogo" */
     component?: string,

     /** @default true */
     resolve?: boolean,

     props?: any,
    },
   },

   panels?: Array<{
    name: string,

    /**
     * 
     * @$default left
    */
    position?: 'left' | 'right',

    component: string,

    props?: {
    },

    /**
     * 
     * @$default true
    */
    overlay?: boolean,
   }>,
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
