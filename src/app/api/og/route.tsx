import { ImageResponse } from "next/og";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { cutString, getReadingTimeInMinutes } from "@/utils/utils";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "none";
    console.log(id);

    let chatThread;
    let question = "";
    let date = "";
    let readingTime = 0;

    if (id.length == 10) {
      const indexDocRef = doc(db, "index", id);
      const indexDocSnapshot = await getDoc(indexDocRef);

      if (indexDocSnapshot.exists()) {
        const { userId } = indexDocSnapshot.data();

        const chatThreadRef = doc(db, "users", userId, "history", id);
        const chatThreadDoc = await getDoc(chatThreadRef);

        if (chatThreadDoc.exists()) {
          chatThread = chatThreadDoc.data();
          question = chatThread.chats[0].question;
          const timestamp = chatThread.createdAt.toDate();
          const dateObject = new Date(timestamp);
          date = dateObject.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          readingTime = getReadingTimeInMinutes(chatThread.chats);
        } else {
          console.log("Chat thread document does not exist");
        }
      } else {
        console.log("Index document does not exist");
      }
    }

    if (!chatThread) {
      return new ImageResponse(
        <img width="1200" height="630" src="https://omniplex.ai/OGImage.png" />,
        {
          width: 1200,
          height: 630,
        }
      );
    }

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "60px",
            backgroundColor: "#161616",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "72px",
                lineHeight: "80px",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              {cutString(question, 64)}
            </div>
            <div
              style={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "32px",
                lineHeight: "36px",
                color: "#8a8a8a",
              }}
            >
              {`${date} - ${readingTime} min read`}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              marginBottom: "120px",
            }}
          >
            <svg
              width="141"
              height="140"
              viewBox="0 0 141 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_24)">
                <path
                  d="M70.24 140C57.8461 140.04 45.6638 136.788 34.9383 130.577C24.2128 124.366 15.3287 115.419 9.19383 104.649C3.05897 93.8802 -0.106616 81.6752 0.020595 69.2819C0.147806 56.8885 3.56325 44.7511 9.91788 34.1101C16.2725 23.4692 25.3384 14.7062 36.1892 8.71672C47.0399 2.72727 59.2863 -0.273863 71.6768 0.0200394C84.0674 0.313942 96.1577 3.89234 106.712 10.3895C117.267 16.8867 125.907 26.0697 131.75 37C137.458 47.6468 140.311 59.5903 140.032 71.6673C139.752 83.7443 136.35 95.5431 130.156 105.915C123.963 116.286 115.188 124.877 104.688 130.85C94.1883 136.824 82.3202 139.976 70.24 140ZM70 4.81C55.7375 4.83803 41.8775 9.54124 30.5435 18.1991C19.2094 26.8569 11.0263 38.9919 7.248 52.7448C3.46966 66.4978 4.30441 81.1102 9.62437 94.3434C14.9443 107.577 24.4561 118.701 36.7024 126.011C48.9487 133.322 63.2541 136.416 77.427 134.82C91.5999 133.224 104.859 127.025 115.172 117.173C125.485 107.321 132.284 94.3599 134.527 80.2749C136.77 66.1898 134.333 51.7579 127.59 39.19C121.998 28.7861 113.689 20.094 103.547 14.0396C93.4055 7.98529 81.8114 4.79546 70 4.81Z"
                  fill="white"
                />
                <path
                  d="M88.16 130.58C88.09 125.23 80.36 121.19 70.16 121.19C59.96 121.19 52.16 125.19 52.16 130.58V130.65C52.22 136 59.96 140.04 70.16 140.04C80.36 140.04 88.16 136.04 88.16 130.65V130.58ZM70.16 135.58C62.08 135.58 56.91 132.66 56.86 130.58C56.81 128.5 62.08 125.58 70.16 125.58C78.24 125.58 83.41 128.51 83.46 130.58C83.51 132.65 78.2 135.54 70.12 135.54L70.16 135.58Z"
                  fill="url(#paint0_radial_1_24)"
                />
                <path
                  d="M130.6 102.79C130.48 89.88 100.08 82.57 71.46 82.25C41.11 82.25 9.70999 89.93 9.60999 102.79C9.72999 115.71 40.13 123.01 68.75 123.33C99.1 123.33 130.5 115.65 130.6 102.79ZM68.75 118.64C36.75 118.28 14.42 110.01 14.34 102.79C14.42 95.3 38.83 86.94 71.46 86.94C103.46 87.3 125.79 95.57 125.87 102.79C125.79 110.28 101.38 118.64 68.75 118.64Z"
                  fill="url(#paint1_radial_1_24)"
                />
                <path
                  d="M140.09 70.06C139.9 56.21 104.77 48.31 71.74 47.97C36.69 47.92 0.359999 56.22 0.159999 70C0.159999 70 0.159999 70 0.159999 70.06C0.159029 70.0767 0.159029 70.0933 0.159999 70.11C0.349999 84 35.48 91.87 68.51 92.21C103.51 92.21 139.88 83.91 140.08 70.12L140.09 70.06ZM68.54 87.48C31.12 87.09 5 78 4.89 70.07C5 61.84 33.56 52.65 71.71 52.65C109.13 53.04 135.23 62.13 135.35 70.06C135.23 78.29 106.68 87.48 68.54 87.48Z"
                  fill="url(#paint2_radial_1_24)"
                />
                <path
                  d="M71.51 16.53C41.15 16.53 9.73999 24.24 9.73999 37.12C9.73999 50 40.13 57.4 68.74 57.72C99.09 57.72 130.5 50.01 130.5 37.12C130.5 24.23 100.12 16.85 71.51 16.53ZM68.77 53C36.77 52.64 14.48 44.35 14.48 37.13C14.48 29.65 38.87 21.27 71.48 21.27C103.48 21.62 125.78 29.92 125.78 37.13C125.78 44.61 101.39 53 68.77 53Z"
                  fill="url(#paint3_radial_1_24)"
                />
                <path
                  d="M69.89 0C64.8 0 53 0.79 53 7.91C53 15.03 64.8 15.8 69.89 15.8C74.98 15.8 86.81 15 86.81 7.91C86.81 0.82 75 0 69.89 0ZM69.89 4.79C77 4.81 82 6.45 82 7.91C82 9.37 77 11 69.89 11C62.78 11 57.76 9.37 57.76 7.91C57.76 6.45 62.74 4.81 69.89 4.81V4.79Z"
                  fill="white"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_1_24"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(70.4456 113.432) scale(34.3196 21.012)"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_1_24"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.0648 65.3429) scale(115.342 45.7917)"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_1_24"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.2347 29.762) scale(133.399 49.3144)"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" />
                </radialGradient>
                <radialGradient
                  id="paint3_radial_1_24"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(71.078 -0.422366) scale(115.123 45.9143)"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" />
                </radialGradient>
                <clipPath id="clip0_1_24">
                  <rect width="140.23" height="139.99" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
