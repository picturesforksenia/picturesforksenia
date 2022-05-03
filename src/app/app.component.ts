import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardData} from './card-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  cardImages = [
    '4a3d92ae-eeab-4bd4-bbca-9d5c4dc9f523.JPG',
    'a9c6ab5d-3f6c-44c6-88a0-d83bf6104831.JPG',
    'c9d1c1d7-1cab-444d-8976-21b29408a72e.JPG',
    'd4168f69-b8a0-4c12-a0c8-db8392155693.JPG',
    'ea1bc667-28e0-464c-84a4-bac38091d95c.JPG',
    'b303c539-3b3b-47ae-8144-6a916e418e37.JPG',
    'dd3db061-858a-4b5b-94d4-0aff5e970f05.JPG',
    '14577e21-59e1-4117-b476-1126905ed0c1.JPG',
    '229662c4-53ed-4a36-8af8-8fef975d37a9.JPG',
    '2d850b08-2030-4c54-bcae-4b196c9fdb7f.JPG',
    '2f19c72a-092b-472b-81e0-7dde24a6535a.JPG',
    '705494ca-c27e-40ad-bf28-809bc65b61c0.JPG',
    '8d44ab10-95d8-4661-a152-63a70fabaff0.JPG',
    '970632a5-1cfd-4f8b-86e8-94ddaae4e089.JPG',
    'ad216571-0937-43de-ac97-1bd7fd6a5288.JPG',
    '1d8ea88c-05f0-4fd4-9e8d-c24b4b25ae74.JPG',
    '6f54b68b-bc0d-4385-90a2-c05bbe20f2d3.JPG',
    '8f94c425-4eca-48fd-8a3f-b4fb9e02e8fa.JPG',
    '9ce2f218-8e4d-4b14-b8bc-aa811a1b1770.JPG',
    '19dfa0b6-4d28-4a28-9451-e2489e4f2c53.JPG',
    '29273287-cf0f-4b99-a347-340c930219f3.JPG',
    '2eef237a-dede-4c92-9f26-534df599098e.JPG',
    '5417c693-65b6-451d-bc51-8ef992a58bff.JPG',
    '67887409-3e60-46a2-a23d-16da809792b8.JPG',
    '874d5f8e-4d47-4b8b-812e-395baaea32b0.JPG',
    '9c9fa6e5-7c68-4976-8c47-6d70f9d1ab83.JPG',
    'a33ae9ad-02ed-4ee8-9074-5272884279e6.JPG',
    'b6ef76d7-a61d-4e8a-aeb2-65613d653112.JPG',
    'ef47264c-217a-4515-ae1e-f4e132511550.JPG',
    'f4a0cddb-1e47-4041-ba0a-a3686f84272e.JPG',
    '05bbba42-eb40-4610-b8e8-986d06160540.JPG',
    '09b63ac5-d49c-4ca6-beed-3126062ea1d2.JPG',
    '11591697-0e13-4ed2-90ae-0e85ad7b63cc.JPG',
    '273e8d42-3d14-428f-9a65-0eedc0d24e51.JPG',
    '3185ed7b-a314-4ed1-809c-d402f20d9a24.JPG',
    '33e8d302-632e-4e8d-a02f-a1fd33a60039.JPG',
    '3b2306f1-6bab-47d8-a16b-52ad51b8083c.JPG',
    '4193914e-36f1-4085-8d30-0404ca07de4a.JPG',
    '5a2b9701-6863-43e3-a1e8-361017c1d1d6.JPG',
    '5d133424-e395-4e58-9638-b830bb3187ed.JPG',
    '6754385f-1072-4fba-b4e4-95e08dad24f3.JPG',
    '6fd68740-a7a4-444b-99a9-f9266cdee1aa.JPG',
    '7ee37890-aefe-4e98-a25a-8e60ab2b6255.JPG',
    'a4740897-dea8-482a-9ea3-c386d5e2e761.JPG',
    'a60ebfff-71af-4b99-a953-d40daf4ea1d8.JPG',
    'aa678ed3-db82-43d0-ae8d-94ac4e297bbd.JPG',
    'ac5cfb1d-0c7d-4486-a4a1-07a1e71ac93e.JPG',
    'ad2e48bd-c769-47ac-8245-a334aafc2385.JPG',
    'cdaaa0b1-0046-4747-9ac9-03c4ef897efa.JPG',
    'd255745e-d1a8-4586-8370-10e41dfb6f51.JPG',
    '101b64fe-7f37-4543-911d-5a5171531cdb.JPG',
    '1cd2ceae-12cd-46c1-a472-dbcf800295d1.JPG',
    '1d906939-ee9d-4fb7-8585-949d846d6762.JPG',
    '1ed9cd72-2327-4087-b856-54a264f51d86.JPG',
    '301505d0-33af-464b-9c4e-e11c4f15fcee.JPG',
    '366ffdf6-5933-4737-9f1b-bf995f15d299.JPG',
    '37218b9d-0912-4f09-abe2-eb4bb37c4914.JPG',
    '4d457ca6-052c-415e-99ae-59d8ee41cfa0.JPG',
    '53c9ae01-4cd2-4850-98a0-bacdb7037c8b.JPG',
    '58103c6e-299a-4e53-8f19-dcbaab2a4cc5.JPG',
    '68a34056-38ee-41af-a4e3-7618ad8e143b.JPG',
    '74919870-e77d-4c13-a407-5ba1cd8e87ed.JPG',
    '8419d01f-52ad-4480-8b15-2e52e25111b8.JPG',
    '8c0e0a65-2959-4466-8f3a-bc7e951d1a66.JPG',
    'a5bce99e-9daf-46a4-9e0c-e99f0b486085.JPG',
    'b7371c26-9e54-4c55-9259-c8fecd4f8bc2.JPG',
    'ba663274-cd26-4f82-ba09-ee8231fea8f8.JPG',
    'c2e2c146-08fa-4599-a6ad-c213f5738efa.JPG',
    'c7d9d754-7521-4e83-90ad-b71a65035683.JPG',
    'd0dee667-9040-414f-9c84-fe9a73375e78.JPG',
    'f1207ae8-1559-47ba-bbe1-ab5e2362fa96.JPG',
    'f78ad90c-9a79-45cf-b9c2-a249d5d16885.JPG',
    '14d6b9f4-54e6-4ace-9cc9-9562833dc26e.JPG',
    'b886aac6-c147-4b2a-8575-982e7ce7bd41.JPG',
    '946a4768-8350-4373-8c3e-f795e579204a.JPG',
    '13f4b1c4-4e05-40cf-b51f-bc1d649ab807.JPG',
    '1a709a9c-2483-41de-b0ff-780a6b5a300b.JPG',
    '24c98522-7d14-4344-92b5-36c6b8b5a9b4.JPG',
    '3151ac76-9e0d-406a-9734-98d60b2c48fe.JPG',
    '39616ab8-4d49-4e03-8f1c-47382f02a537.JPG',
    '485eceb6-fb4a-4028-a808-1fba42c4b825.JPG',
    '54d1d0b6-ed7a-48f9-9bf5-353d2dd3f2eb.JPG',
    '58a6a760-e792-40dd-95f4-da7901bf5e4e.JPG',
    '60fafe88-ad1b-42c1-827d-fa20391d30eb.JPG',
    '629ad091-f7b5-4ec7-8300-de1d665101d4.JPG',
    '66152bca-c68a-45c1-9fc0-4a7a116852e9.JPG',
    '6d4413ad-f918-4301-804e-8f53353e10e4.JPG',
    '72a8c92a-8244-4ddb-90cf-551cfdd5f9c9.JPG',
    '7772bf7f-6597-4aca-bb84-cdba86b54c30.JPG',
    '7cd9f508-c45e-4bac-a123-34012baa3ea4.JPG',
    '95961b28-9eec-4546-9b7b-123fd873e0d9.JPG',
    '99db9519-ea7d-4eb5-8254-b0e772110d1c.JPG',
    'b071b00c-110d-4952-804e-f0b6ac9fbb5c.JPG',
    'bc70c23c-38c0-431e-8825-2f9516830491.JPG',
    'c3735632-8eeb-4811-b4a4-fc406fd2259b.JPG',
    'c5b339a1-9a39-4fbd-8783-3b51fa139aa1.JPG',
    'd1e3c419-1107-4ab2-8d8b-f20eed26e5b4.JPG',
    'd4c1d4fa-f0ff-4b66-9c17-e806ae37af0c.JPG',
    'ebaa49b8-322f-41ff-b63a-c0d7693fdb98.JPG',
    'f09b44a9-d4de-4ae7-8be6-992463c269f9.JPG',
    '0a246843-80b0-4ffe-98a2-8f99fc06901d.JPG',
    '19752982-b974-4d82-a0d4-98d4965f0091.JPG',
    '218cf719-4722-4f00-9e1f-0aaeeb59ff04.JPG',
    '21b6123d-15b5-42a4-873b-614001c062b7.JPG',
    '2e9b70e6-ef5a-40bb-ad43-28063b9d749f.JPG',
    '339d8d47-fcc6-4bd3-ae46-d108f10d2e85.JPG',
    '4deac042-b559-497f-8b51-d26bb157bf7b.JPG',
    '5b653e8d-d6fb-4ed6-875b-ea24486e93e0.JPG',
    '84c1885f-bf1f-486c-b181-3ab9e50c5c07.JPG',
    '8bb632ae-f309-4756-996a-92066fe6af7f.JPG',
    'a76faa47-24c4-471f-92c0-84d982dc540c.JPG',
    'a9e4ecc3-242b-47a6-bf52-6ef8e4da25b6.JPG',
    'aeb0032d-47d9-487d-a7d7-bed773c34255.JPG',
    'b5b2a9c2-ff31-46d7-9d23-5894074de4c0.JPG',
    'b74dac68-5cab-4254-90e9-58f1daf3d44d.JPG',
    'bd60ea9f-8f3b-4821-b48c-daf935af5489.JPG',
    'c82acf06-7733-472a-8839-d3384fa1898f.JPG',
    'ced8abc4-e5d8-4326-918a-3a3957d35a1a.JPG',
    'e6262c29-7c37-46b8-ad70-0a5d4d47a5c6.JPG',
    'ed7d37af-d08a-4285-806f-aea9dcce7fbf.JPG',
    'f65e87a6-bd54-455e-884a-fc8e6f5ad8bd.JPG',
    '09759411-3f4c-4fdf-926a-00a6cc447023.JPG',
    '769c08d9-ad4b-4e5e-b7ab-af673041103b.JPG',
    'd15fe8e7-5fdd-4a61-84cc-c8c76d06d004.JPG',
    '9e3bea23-a3c8-4e3d-b07e-a970cc4b126c.JPG',
    '13ed8f23-ed7c-4645-9b66-de6ba416420e.JPG',
    '5106160f-d346-4a4c-baef-9439a0c4032f.JPG',
    '7d46adcf-7bfe-492b-8a89-4ff09d371734.JPG',
    'bc0cad6e-932a-40b0-b208-e093323c506b.JPG',
    '261102a7-b1c3-4793-b249-1698a4a777ce.JPG',
    '5a96a7ec-4e7f-4c23-9dce-2e7471b5ddb1.JPG',
    '77cc04c1-38d2-4089-8eee-2286996294d1.JPG',
    '8aa094fe-593f-4d5c-a2ae-770825887979.JPG',
    'a7e4f862-1a06-459f-a0ae-5467a4d67be3.JPG',
    'ca69e393-9cd7-4e0e-b545-b3034b49f934.JPG',
    '5fb0e9f4-d2a7-4f27-9990-742f9b9efab5.JPG',
    '96a98d7a-cc36-4deb-981b-8bf6494736a1.JPG',
    'e31ede51-d6bd-4ba4-886e-03613c30c7c9.JPG',
    'eee62b82-a10f-43c3-a919-7046ef73c206.JPG',
    '477c575c-85d6-4b42-8fd1-4421b1b87b0a.JPG',
    '9fb58530-6a5b-46e9-8281-da479e7eef86.JPG',
    'd7b5b873-b97e-4c76-97bb-ea6e6a32a911.JPG',
    '2d261511-af37-4bd0-adcd-88bc532ce6ad.JPG',
    '3c1ccaf0-e06d-4bbb-ab2e-4540f6610e3c.JPG',
    '5736adb8-4398-4043-86a7-d14451f64d54.JPG'
  ]

  private NUMBER_OF_CARDS: Number = 5;

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    this.shuffleArray(this.cardImages).filter((value, index) => index < this.NUMBER_OF_CARDS).forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({...cardData});
      this.cards.push({...cardData});

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.NUMBER_OF_CARDS) {
          this.restart();
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

}
