export class GetTranslationDto{
    text: string | undefined; 
    from: string | undefined;
    to?: string
}

export class AddDto{
    text_kk?: string;
    text_ru?: string;
    meaning_kk?: string;
    meaning_ru?: string;
}